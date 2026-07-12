import 'package:flutter/material.dart';

class JobExperience {
  final Widget title;
  late final VoidCallback onTap;
  late final String imgUrl;
  late final String description;

  JobExperience(
      {required this.title,
      required this.onTap,
      required this.imgUrl,
      required this.description});
}
