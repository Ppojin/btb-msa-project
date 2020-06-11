package com.example.tdd_demo;

import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.Test;

public class TestMember {
    @Test
    public void test(){
        Member member = new Member();
        member.setName("황효진");
        Assertions.assertEquals(member.getName(), "황효진");
    }
}
