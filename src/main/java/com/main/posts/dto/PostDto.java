package com.main.posts.dto;

import com.main.posts.repository.BaseTimeEntity;
import lombok.Builder;
import lombok.Data;
import lombok.Getter;
import lombok.Setter;
import org.springframework.web.multipart.MultipartFile;

import java.util.List;


@Getter
@Setter
public class PostDto  {

    private String title;

    private String text;

    private String price;

    private String end_date;

    private String seat_number;

    private String region;



}
