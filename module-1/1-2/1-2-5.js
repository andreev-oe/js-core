function finalGrade(exam, projects) {
    if (exam > 90 || projects > 10) {
        return 100
    } else if (exam > 75 && projects >= 5) {
        return 90
    } else if (exam > 50 && projects >= 2) {
        console.log(75)
        return 75
    } else {
        return 0
    }
}
//
// finalGrade(100, 12);  // 100
// finalGrade(99, 0);    // 100
// finalGrade(10, 15);   // 100
// finalGrade(85, 5);    // 90
// finalGrade(55, 3);    // 75
// finalGrade(55, 0);    // 0
// finalGrade(20, 2);    // 0