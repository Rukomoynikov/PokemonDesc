// Работа с простыми типами

const concat = (left_part: string, right_part: string): string => {
  return left_part + right_part
}

// Работа с интерфейсами

interface MyHometask {
	howIDoIt: string,
	simeArray: [string, string, number],
  withData: Array<{howIDoIt: string, simeArray: string}>
}

// Типизация функций, используя Generic
type reduceParams<T> = (accumulator: T, 
                        currentValue: T, 
                        index: number, 
                        initialArray: T[]) => T

interface MyArray<T> {
	[n: number]: T;

  map(fn: (el: T) => T): T[];
  reduce(fn: reduceParams<T>): T;
}

const tsArray: MyArray<number> = [1,2,3]

tsArray.reduce((accumulator, currentValue) => accumulator + currentValue)
