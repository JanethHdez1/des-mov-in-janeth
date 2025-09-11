import 'package:list_clases_herencia/Person.dart';

class Student extends Person {

  String enrollment;
  Student({required String name, required this.enrollment}): super(name) ;
}