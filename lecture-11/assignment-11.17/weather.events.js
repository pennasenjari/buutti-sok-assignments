/* Your friend wants to create a service for tracking changes in the weather. They want to
 gather information on multiple values: temperature, humidity, and wind strength.

Every time one of these is changed, a weather change event object should be added to
 an array that lists the changes in the weather.

Each event should have a timestamp and a value that corresponds to the type of the event.
 For example, a temperature change event should have a timestamp and a temperature property. 
 We also need a method for printing information about the event.

Thinking of this, we can see that the events form a class structure:

Base weather event
Temperature change event
Humidity change event
Wind strength change event

Let's implement that!

a) Create a class named WeatherEvent that has a timestamp value taken as a parameter and
 assigned as a property in the constructor.

Also create two methods:

- a getInformation method that just returns an empty string. We'll override this in derived
 classes to make the events print meaningful information
- a print method that uses console.log to log the event's timestamp followed by a space and
 the value returned by getInformation.

b) Create a class named TemperatureChangeEvent that extends WeatherEvent. Its constructor
   should accept and forward the timestamp parameter to the superclass constructor and also
   have a temperature parameter that is assigned as a property.

Also, override the getInformation method to return "temperature: your temperature value °C".

c) Create a class named HumidityChangeEvent that extends WeatherEvent. Its constructor 
   should accept and forward the timestamp parameter to the superclass constructor and 
   also have a humidity parameter that is assigned as a property.

Also, override the getInformation method to return "humidity: your humidity value %".

d) As you can probably guess, we also need to implement the wind strength change event
 similarly to the above two ones. Do so.

e) Create an empty array.

Create some weather events of different types and push them to the array. When supplying
 a value to the timestamp property, you can just type any string that denotes a date+time
  stamp to you.

Use a loop or the forEach array method to go through all of the events and call their
 print method to make sure your code works.

const weatherEvents = [];

weatherEvents.push(new TemperatureChangeEvent("2022-11-29 03:00", -6.4));
weatherEvents.push(new HumidityChangeEvent("2022-11-29 04:00", 95));
weatherEvents.push(new WindStrengthChangeEvent("2022-11-30 13:00", 2.2));

weatherEvents.forEach(weatherEvent => weatherEvent.print());
// Should print:
// 2022-11-29 03:00 temperature: -6.4°C
// 2022-11-29 04:00 humidity: 95%
// 2022-11-30 13:00 wind strength: 2.2 m/s
EXTRA: Instead of a string, use a Date object to specify the timestamp for the events.
Also, print the Date object properly in the weather event print method. See
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/Date
*/

class WeatherEvent {
  constructor(timestamp) {
    this.timestamp = timestamp;
  }

  getInformation() {
    return ``;
  }

  print() {
    // Extra: formatting Date object
    var options = { year: 'numeric', month: 'numeric', day: 'numeric', hour: 'numeric',
    minute: 'numeric' };
    console.log(this.timestamp.toLocaleString("fi-FI", options) + " " + this.getInformation());
  }
}

class TemperatureChangeEvent extends WeatherEvent {
  constructor(timestamp, temperature) {
    super(timestamp);
    this.temperature = temperature;
  }

  getInformation() {
    return `temperature: ${this.temperature} °C`;
  }
}

class HumidityChangeEvent extends WeatherEvent {
  constructor(timestamp, humidity) {
    super(timestamp);
    this.humidity = humidity;
  }

  getInformation() {
    return `humidity: ${this.humidity} %`;
  }
}

class WindStrengthChangeEvent extends WeatherEvent {
  constructor(timestamp, wind) {
    super(timestamp);
    this.wind = wind;
  }

  getInformation() {
    return `wind: ${this.wind} m/s`;
  }
}

const weatherEvents = [];

weatherEvents.push(new TemperatureChangeEvent("2022-11-29 03:00", -6.4));
weatherEvents.push(new HumidityChangeEvent("2022-11-29 04:00", 95));
weatherEvents.push(new WindStrengthChangeEvent("2022-11-30 13:00", 2.2));
weatherEvents.forEach(weatherEvent => weatherEvent.print());
/* Prints:
   2022-11-29 03:00 temperature: -6.4°C
   2022-11-29 04:00 humidity: 95%
   2022-11-30 13:00 wind strength: 2.2 m/s */

// Extra: using Date object
const weatherEvents2 = [];
weatherEvents2.push(new TemperatureChangeEvent(new Date("2022-11-29 03:00"), -6.4));
weatherEvents2.push(new HumidityChangeEvent(new Date("2022-11-29 04:00"), 95));
weatherEvents2.push(new WindStrengthChangeEvent(new Date("2022-11-30 13:00"), 2.2));
weatherEvents2.forEach(weatherEvent => weatherEvent.print());
/* Prints:
29.11.2022 klo 3.00 temperature: -6.4 °C
29.11.2022 klo 4.00 humidity: 95 %
30.11.2022 klo 13.00 wind: 2.2 m/s */