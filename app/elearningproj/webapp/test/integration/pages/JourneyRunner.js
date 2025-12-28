sap.ui.define([
    "sap/fe/test/JourneyRunner",
	"elaerning/elearningproj/test/integration/pages/CategoriesList",
	"elaerning/elearningproj/test/integration/pages/CategoriesObjectPage",
	"elaerning/elearningproj/test/integration/pages/CoursesObjectPage"
], function (JourneyRunner, CategoriesList, CategoriesObjectPage, CoursesObjectPage) {
    'use strict';

    var runner = new JourneyRunner({
        launchUrl: sap.ui.require.toUrl('elaerning/elearningproj') + '/test/flp.html#app-preview',
        pages: {
			onTheCategoriesList: CategoriesList,
			onTheCategoriesObjectPage: CategoriesObjectPage,
			onTheCoursesObjectPage: CoursesObjectPage
        },
        async: true
    });

    return runner;
});

