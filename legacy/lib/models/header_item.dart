import 'package:flutter/material.dart';

class HeaderItem {
  late final String title;
  late final VoidCallback onTap;
  late final bool isButton;

  HeaderItem({required this.title, required this.onTap, this.isButton = false});
}
