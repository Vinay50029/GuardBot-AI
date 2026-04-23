package com.guardbot.controller;

import com.guardbot.model.AuditRequest;
import com.guardbot.model.AuditResponse;
import com.guardbot.service.AuditService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api")
@CrossOrigin(origins = "*") // For local React testing
public class AuditController {

    @Autowired
    private AuditService auditService;

    @PostMapping("/audit")
    public ResponseEntity<AuditResponse> auditRepository(@RequestBody AuditRequest request) {
        if (request.getRepoUrl() == null || request.getRepoUrl().isEmpty()) {
            return ResponseEntity.badRequest().build();
        }
        
        AuditResponse response = auditService.analyzeRepository(request.getRepoUrl());
        return ResponseEntity.ok(response);
    }
}
