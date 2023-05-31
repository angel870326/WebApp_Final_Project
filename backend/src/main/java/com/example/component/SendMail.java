package com.example.component;

import org.springframework.stereotype.Component;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;

@Component
public class SendMail {

    private static JavaMailSender mailSender;

    @Autowired
    public void setMailSender(JavaMailSender mailSender) {
        SendMail.mailSender = mailSender;
    }

    public static void sendMail(String memberMail, String memberName, String animalName, String donatePlanName,
            Integer donatePlanAmount) {

        String text = memberName + " 先生/小姐您好：\n\n感謝您認養 " + animalName + "！\n\n您選擇的認養方案為【" + donatePlanName
                + "】。\n本認養方案金額為 " + Integer.toString(donatePlanAmount)
                + " 元，認養將正式從匯款審核通過後開始。\n\n請於三天內匯款至以下帳戶，以完成認養流程：\n中國信託帳戶 xxxxxxxxxxxxxxxx\n\n\nAnimal Cloud Adoption 團隊敬上";

        SimpleMailMessage message = new SimpleMailMessage();
        message.setFrom("r10741009@g.ntu.edu.tw");
        message.setTo(memberMail);
        message.setSubject("[Animal Cloud Adoption] 匯款通知");
        message.setText(text);

        mailSender.send(message);

    }
}
