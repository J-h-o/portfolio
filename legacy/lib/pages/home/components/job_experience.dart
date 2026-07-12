import 'package:flutter/material.dart';
import 'package:google_fonts/google_fonts.dart';
import 'package:portfolio/constants.dart';
import 'package:responsive_framework/responsive_wrapper.dart';

import '../../../screen_helper.dart';

class JobExperience extends StatelessWidget {
  const JobExperience({Key? key}) : super(key: key);

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
        mainAxisAlignment: MainAxisAlignment.center,
        crossAxisAlignment: CrossAxisAlignment.center,
        children: [
          Text(
            "Work Experience",
            style: GoogleFonts.oswald(
              color: Colors.white,
              fontWeight: FontWeight.w900,
              height: 1.8,
              fontSize: 25.0,
            ),
          ),
          const SizedBox(
            height: 10,
          ),
          const Text(
            "Check out some of the cool products I helped build!",
            style: TextStyle(
              color: kCaptionColor,
              fontWeight: FontWeight.w100,
              height: 1,
              fontSize: 15.0,
            ),
          ),
          const SizedBox(
            height: 50.0,
          ),
          _buildJobExperience(context, width),
        ],
      ),
    );
  }
}

Widget _buildJobExperience(BuildContext context, double width) {
  return ResponsiveWrapper(child: width == 1000 ? Row(_listGeneratorJobExperience()) : Column(_listGeneratorJobExperience()));
}

Widget _listGeneratorJobExperience(){
  return List.generate(length, generator)
}