{

    interface Circle {
        shape: "circle";
        radius: number;
    }

    interface Rectangle {
        shape: "rectangle";
        width: number;
        height: number;
    }

    type Shape = Circle | Rectangle;

    function calculateShapeArea(shape: Shape): number {
        if (shape.shape === "circle") {
            return parseFloat((Math.PI * Math.pow(shape.radius, 2)).toFixed(2));
        } else if (shape.shape === "rectangle") {
            return shape.width * shape.height;
        }
        
        return 0;
    }

    const result1 = calculateShapeArea({ shape: "circle", radius: 5 });
    console.log(result1); 

    const result2 = calculateShapeArea({ shape: "rectangle", width: 4, height: 6 });
    console.log(result2); 

}