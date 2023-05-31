package com.example.component;

import com.example.model.DonateRecord;
import com.example.repository.DonateRecordRepository;

import org.springframework.stereotype.Component;
import org.springframework.beans.factory.annotation.Autowired;

import java.time.LocalDateTime;

@Component
public class UpdateDonateRecordStatus {

    private static DonateRecordRepository donateRecordRepository;

    @Autowired
    public void setMailSender(DonateRecordRepository donateRecordRepository) {
        UpdateDonateRecordStatus.donateRecordRepository = donateRecordRepository;
    }

    public static void updateStatus(DonateRecord donateRecord) {
        if (donateRecord.getStatus().equals("認養中")) {
            if (LocalDateTime.now().isAfter(donateRecord.getDonationEndDate())) {
                donateRecord.setStatus("認養結束");
                donateRecordRepository.save(donateRecord);
            }
        }
    }

}
