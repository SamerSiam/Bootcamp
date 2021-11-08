function circleArea(radius)
{
  let area=0;
  area= Math.PI * (radius **2);
  return area;
}

let area1= circleArea(10);
console.log ("Area of a circle with 10 meter Radius is: " ,area1 );
console.log ("The above area rounded to the nearest 2 decimals is: " ,area1.toFixed(2) );