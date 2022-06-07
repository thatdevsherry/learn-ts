{
  const obj = { width: 10, height: 10 };
  const area = obj.width * obj.heigh;

  // NOTE: accessing property that does not exist is VALID JS
  // TS fails not because it's a syntax error, but a logical one
  // aka "non-sensical"

  console.log("area", area);
}
