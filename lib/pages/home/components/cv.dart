import 'package:flutter/material.dart';
import 'package:google_fonts/google_fonts.dart';
import 'package:portfolio/constants.dart';
import 'package:responsive_framework/responsive_wrapper.dart';
import 'dart:html' as html;

import '../../../screen_helper.dart';

class Cv extends StatelessWidget {
  const Cv({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return SizedBox(
        width: double.infinity,
        child: ScreenHelper(
          desktop: _buildUi(context, 1000.0),
          mobile: _buildUi(context, MediaQuery.of(context).size.width * .8),
          tablet: _buildUi(context, 760.0),
        ));
  }

  Widget _buildUi(BuildContext context, double width) {
    return ResponsiveWrapper(
      maxWidth: width,
      minWidth: width,
      defaultScale: false,
      child: Column(
        mainAxisAlignment: MainAxisAlignment.start,
        children: [
          Row(
            mainAxisAlignment: MainAxisAlignment.spaceBetween,
            children: [
              Text(
                "Better Design, \nBetter Experiences",
                style: GoogleFonts.oswald(
                  color: Colors.white,
                  fontWeight: FontWeight.w900,
                  height: 1.8,
                  fontSize: 18.0,
                ),
              ),
              MouseRegion(
                cursor: SystemMouseCursors.click,
                child: Container(
                  decoration: BoxDecoration(
                    color: kDangerColor,
                    borderRadius: BorderRadius.circular(8.0),
                  ),
                  padding: const EdgeInsets.symmetric(
                      horizontal: 20.0, vertical: 5.0),
                  child: TextButton(
                    onPressed: () {
                      html.window.open(
                          "https://firebasestorage.googleapis.com/v0/b/joanisallushi.appspot.com/o/Joanis%2BAllushi%2BResume%2B-%2BJunior%2BDeveloper.pdf?alt=media&token=5f384b09-2d4f-4c0f-b99e-dcd3be467602",
                          "_blank");
                    },
                    child: Text(
                      "Download CV",
                      style: GoogleFonts.oswald(
                        color: Colors.white,
                        fontWeight: FontWeight.w700,
                        fontSize: 16.0,
                      ),
                    ),
                  ),
                ),
              ),
            ],
          ),
          const SizedBox(
            height: 50.0,
          ),
        ],
      ),
    );
  }
}
