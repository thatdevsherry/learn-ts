{
  const obj = { width: 10, height: 10 };
  const area = obj.width * obj.height;

  // TypeScript does not compile! Good
  console.log("area:", area);
}
