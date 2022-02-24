import 'package:carousel_slider/carousel_slider.dart';
import 'package:flutter/material.dart';
import 'package:portfolio/pages/home/components/carousel_items.dart';
import 'package:portfolio/screen_helper.dart';
import 'package:responsive_framework/responsive_framework.dart';

class Carousel extends StatefulWidget {
  const Carousel({Key? key}) : super(key: key);

  @override
  State<Carousel> createState() => _CarouselState();
}

class _CarouselState extends State<Carousel> {
  CarouselController carouselController = CarouselController();

  @override
  Widget build(BuildContext context) {
    double carouselHeight = MediaQuery.of(context).size.height *
        (ScreenHelper.isMobile(context) ? .7 : .85);
    return SizedBox(
      height: carouselHeight,
      //color: Colors.yellow,
      width: double.infinity,
      child: Column(mainAxisAlignment: MainAxisAlignment.start, children: [
        Container(
          alignment: Alignment.center,
          child: CarouselSlider(
            carouselController: carouselController,
            options: CarouselOptions(
              //autoPlay: true,
              viewportFraction: 1,
              scrollPhysics: const NeverScrollableScrollPhysics(),
              height: carouselHeight,
            ),
            items: List.generate(
              carouselItems.length,
              (index) => Builder(builder: (BuildContext context) {
                return Container(
                  constraints: BoxConstraints(
                    minHeight: carouselHeight,
                  ),
                  child: ScreenHelper(
                    desktop: _buildDesktop(
                      context,
                      carouselItems[index].text,
                      carouselItems[index].image,
                    ),
                    tablet: _buildTablet(
                      context,
                      carouselItems[index].text,
                      carouselItems[index].image,
                    ),
                    mobile: _buildMobile(
                      context,
                      carouselItems[index].text,
                      carouselItems[index].image,
                    ),
                  ),
                );
              }),
            ).toList(),
          ),
        )
      ]),
    );
  }
}

Widget _buildDesktop(BuildContext context, Widget text, Widget image) {
  return Center(
    child: ResponsiveWrapper(
      maxWidth: 1000.0,
      minWidth: 1000.0,
      defaultScale: false,
      child: Row(
        children: [
          Expanded(
            child: text,
          ),
          Expanded(
            child: image,
          ),
        ],
      ),
    ),
  );
}

Widget _buildTablet(BuildContext context, Widget text, Widget image) {
  return Center(
    child: ResponsiveWrapper(
      maxWidth: 760.0,
      minWidth: 760.0,
      defaultScale: false,
      child: Row(
        children: [
          Expanded(
            child: text,
          ),
          Expanded(
            child: image,
          ),
        ],
      ),
    ),
  );
}

Widget _buildMobile(BuildContext context, Widget text, Widget image) {
  return Container(
    constraints: BoxConstraints(
      maxHeight: MediaQuery.of(context).size.width * .8,
    ),
    width: double.infinity,
    child: text,
  );
}
