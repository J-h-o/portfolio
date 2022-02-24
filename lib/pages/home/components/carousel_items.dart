import 'package:flutter/material.dart';
import 'package:google_fonts/google_fonts.dart';
import 'package:portfolio/constants.dart';
import 'package:portfolio/models/carousel_item.dart';

List<CarouselItemModel> carouselItems = List.generate(
  5,
  (index) => CarouselItemModel(
    text: Column(
      mainAxisAlignment: MainAxisAlignment.center,
      crossAxisAlignment: CrossAxisAlignment.start,
      mainAxisSize: MainAxisSize.min,
      children: [
        Text(
          "Application and Website developer",
          style: GoogleFonts.oswald(
            color: kDangerColor,
            fontWeight: FontWeight.w900,
            fontSize: 16.0,
          ),
        ),
        const SizedBox(
          height: 18.0,
        ),
        Text(
          "JOANIS\nALLUSHI",
          style: GoogleFonts.oswald(
            color: Colors.white,
            fontSize: 40.0,
            fontWeight: FontWeight.w900,
            height: 1.3,
          ),
        ),
        const SizedBox(
          height: 10.0,
        ),
        const Text(
          "Full-stack developer, based in Thessaloniki.",
          style: TextStyle(
            color: kCaptionColor,
            fontSize: 15.0,
            height: 1.0,
          ),
        ),
      ],
    ),
    image: Image.asset(
      'assets/person1.png',
      fit: BoxFit.contain,
    ),
  ),
);
