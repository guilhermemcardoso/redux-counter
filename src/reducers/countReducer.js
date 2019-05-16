let count= 0;

export default function(state=count, action){
  switch (action.type) {
    case "Increment": 
        count++;
        console.log("INCREMENT", (count - 1) + " TO " + count);
        break;
    case "Decrement": 
        count--;
        console.log("DECREMENT", (count + 1) + " TO " + count);
        break;
  }
  return count;
}