package com.guardbot.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import java.util.List;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class AuditResponse {
    private String repoName;
    private String status;
    private String aiReport;
    private List<String> identifiedRisks;
}
