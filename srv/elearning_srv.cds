using app.elearning from '../db/elearning';

service elearning_srv {
    entity Categories as projection on elearning.Categories;


    entity Courses as projection on elearning.Courses;
        
}
