import 'package:flutter/material.dart';
import 'package:portfolio/pages/home/components/header.dart';

class Home extends StatelessWidget {
  const Home({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: SingleChildScrollView(
        child: Column(
            crossAxisAlignment: CrossAxisAlignment.start,
            children: const [
              Header(),
            ]),
      ),
    );
  }
}
