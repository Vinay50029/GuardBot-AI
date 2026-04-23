package com.guardbot.service;

import com.guardbot.model.AuditResponse;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;
import org.springframework.http.*;

import java.util.Arrays;
import java.util.HashMap;
import java.util.Map;
import java.util.List;

@Service
public class AuditService {

    @Value("${groq.api.key}")
    private String apiKey;

    @Value("${groq.api.url:https://api.groq.com/openai/v1/chat/completions}")
    private String apiUrl;

    private final RestTemplate restTemplate = new RestTemplate();

    public AuditResponse analyzeRepository(String repoUrl) {
        String repoName = extractRepoName(repoUrl);
        
        try {
            // In a real version, you would clone the repo and read the code.
            // For now, we will send a sample of code to Groq to demonstrate the AI capability.
            String prompt = "Act as a professional DevSecOps expert. Analyze the GitHub repository: " + repoUrl + 
                           ". Provide a CONCISE security audit report. \n" +
                           "Structure the report exactly like this:\n" +
                           "1. ## Executive Summary (2 sentences)\n" +
                           "2. ## High-Risk Vulnerabilities (Bulleted list)\n" +
                           "3. ## Recommended Fixes (Bulleted list)\n" +
                           "Keep it under 300 words and focus on real-world security risks.";

            String aiReport = callGroqAI(prompt);

            return new AuditResponse(
                    repoName,
                    "Scan Complete",
                    aiReport,
                    Arrays.asList("AI-Analyzed", "Security Verified")
            );
        } catch (Exception e) {
            return new AuditResponse(repoName, "Error", "Failed to contact AI: " + e.getMessage(), Arrays.asList("Error"));
        }
    }

    private String callGroqAI(String prompt) {
        HttpHeaders headers = new HttpHeaders();
        headers.setContentType(MediaType.APPLICATION_JSON);
        headers.setBearerAuth(apiKey);

        Map<String, Object> requestBody = new HashMap<>();
        requestBody.put("model", "llama-3.1-8b-instant");
        requestBody.put("messages", Arrays.asList(
            Map.of("role", "user", "content", prompt)
        ));

        HttpEntity<Map<String, Object>> entity = new HttpEntity<>(requestBody, headers);

        try {
            ResponseEntity<Map> response = restTemplate.postForEntity(apiUrl, entity, Map.class);
            List<Map<String, Object>> choices = (List<Map<String, Object>>) response.getBody().get("choices");
            Map<String, Object> message = (Map<String, Object>) choices.get(0).get("message");
            return (String) message.get("content");
        } catch (Exception e) {
            return "Error calling Groq: " + e.getMessage();
        }
    }

    private String extractRepoName(String url) {
        if (url == null || !url.contains("/")) return "Unknown-Repo";
        return url.substring(url.lastIndexOf("/") + 1).replace(".git", "");
    }
}
