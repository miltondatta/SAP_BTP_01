namespace app.elearning;
using { Language, managed } from '@sap/cds/common';

type string50 : String(50);

entity Categories : managed {
    key id : UUID;
        name : string50;
        description : String(100);
        course: Association to many Courses on course.category = $self;
}
entity Courses : managed {
    key category : Association to Categories;
    key course_id : UUID;
        course_name : string50;
        language : Language;

}


