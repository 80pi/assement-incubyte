interface NegativeMessageProps {
  flag: boolean;
  value: string[];
}
export function addNumberInString(data: string) {
  const arr: string[] = data.split(/[ .:;?!~,`"&|()*<>{}%\[\]\r\n/\\]+/);
  let sum: number = 0;
  let negativeMessage: NegativeMessageProps = {
    flag: false,
    value: [],
  };
  for (let item of arr) {
    if (parseInt(item) < 0) {
      negativeMessage.flag = true;
      negativeMessage.value.push(item);
    }
    if (parseInt(item) < 1001) {
      sum = sum + parseInt(item);
    }
  }

  if (negativeMessage.flag) {
    return `negatives not allowed ${negativeMessage.value}`;
  }
  if (!sum) return 0;
  else return sum;
}

addNumberInString("//[**][%%]\n1**2%%3");
