1. if (condition) {statement}
2. if (condition) {statement} else {statement}
3. if (condition) {statement} else if (condition) {statement} ... else {statement}

4. (condition) ? (IF statement) : (ELSE statement)

5. switch (var) {
    case value_1: 
    statement_1;
    return;

    case value_2: 
    statement_2;
    return;

    ...

    case value_N: 
    statement_N;
    return;

    default:
    statement
}


switch (var) {
    case value_1: 
    STATEMENT;
    return;

    case value_2: 
    STATEMENT;
    return;

    ...

    case value_N: 
    statement_N;
    return;

    default:
    statement
}
SHORT => 
switch (var) {
    case value_1: 
    case value_2: 
    STATEMENT;
    return;

    ...

    case value_N: 
    statement_N;
    return;

    default:
    statement
}

6. SCOPE: Global & Block {}

7. while (condition) {statement}
8. do {statement} while (condition)
9. for (start, condition, step) {statement}
10. break & continue