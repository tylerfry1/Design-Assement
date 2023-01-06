/////////////////////////////////////////////////
///////////////////ORDERS.JS/////////////////////
/////////////////////////////////////////////////
/*
    In this file, you'll be writing a class
    to make tickets from order information.
*/

//////////////////PROBLEM 1////////////////////
/*  
    Create a new class called `Ticket`.
    Make sure to call your constructor, and 
    require these 3 parameters: items, orderTime, 
    customerId. Additionally, set up a property
    called `status` that always has an initial
    value of 'queued'.

    Create a method on the class called `updateStatus`.
    The method should have one parameter, `newStatus`,
    which will be a string.

    Inside the method, set the value of `this.status`
    to be the new status that was sent in. Then
    console.log something like: 
    'The order for customer [CUSTOMERID] is
    now [STATUS].'
    Where CUSTOMERID and STATUS reference the values
    stored on the object.
*/

//CODE HERE
class Ticket {
  constructor(items, orderTime, customerId) {
    this.items = items;
    this.ordertime = orderTime;
    this.customerId = customerId;
    this.status = "queued";
  }

  updateStatus(newStatus) {
    this.status = newStatus;
    console.log("The order for", this.customerId, "is now", this.newstatus);
}
}


/*
    Create a new instance of your class.
    Save it to a variable called `firstTicket`.

    You can use this sample data or make
    up your own:
    food ordered: pizza, bread, and soda
    ordered at: 7:03 PM
    customer: 575
*/

//CODE HERE

const firstTicket = new Ticket();

/*
    Call the `updateStatus` method on
    `firstTicket` passing in the string
    'cooking'
*/

//CODE HERE
//firstTicket(updateStatus, "cooking");
firstTicket.updateStatus('cooking');



//Not Sure if Submitting correctly but Here are my submissions for the design section
// Low-Fidelity Wireframe link https://www.figma.com/file/zLFctwOs7eYPfVlOKUeR33/Tyler-Fry?node-id=2%3A8&t=bZnDnvrwPMg71Yoe-0
// Style Guid Link https://www.figma.com/file/qLT14IQuneBxY3RTpo4Lbg/Design-%232?node-id=1%3A2&t=ZSKKUUlJZzg67Q2h-0
// Final Wireframe https://www.figma.com/file/fOOXYKtosWfVRUecCMhM77/Final-Wirefarme?node-id=1%3A2&t=1iMsfyAHzM5dx8pk-0
