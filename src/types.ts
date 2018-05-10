interface CalcState {
  total: number;
  memory: number;
  selectedOperator: Operator;
}

enum Operator {
  plus = '+',
  subtract = '-',
  multiple = '*',
  divide = '/',
  empty = '',
}

export {
  CalcState,
  Operator
}