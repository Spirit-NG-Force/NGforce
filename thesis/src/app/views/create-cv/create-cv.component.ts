import { Component, OnInit } from "@angular/core";
import * as Rellax from "rellax";

@Component({
  selector: "app-create-cv",
  templateUrl: "./create-cv.component.html",
  styleUrls: ["./create-cv.component.css"],
})
export class CreateCvComponent implements OnInit {
  zoom: number = 14;
  lat: number = 44.445248;
  lng: number = 26.099672;
  styles: any[] = [
    {
      featureType: "water",
      elementType: "geometry",
      stylers: [{ color: "#e9e9e9" }, { lightness: 17 }],
    },
    {
      featureType: "landscape",
      elementType: "geometry",
      stylers: [{ color: "#f5f5f5" }, { lightness: 20 }],
    },
    {
      featureType: "road.highway",
      elementType: "geometry.fill",
      stylers: [{ color: "#ffffff" }, { lightness: 17 }],
    },
    {
      featureType: "road.highway",
      elementType: "geometry.stroke",
      stylers: [{ color: "#ffffff" }, { lightness: 29 }, { weight: 0.2 }],
    },
    {
      featureType: "road.arterial",
      elementType: "geometry",
      stylers: [{ color: "#ffffff" }, { lightness: 18 }],
    },
    {
      featureType: "road.local",
      elementType: "geometry",
      stylers: [{ color: "#ffffff" }, { lightness: 16 }],
    },
    {
      featureType: "poi",
      elementType: "geometry",
      stylers: [{ color: "#f5f5f5" }, { lightness: 21 }],
    },
    {
      featureType: "poi.park",
      elementType: "geometry",
      stylers: [{ color: "#dedede" }, { lightness: 21 }],
    },
    {
      elementType: "labels.text.stroke",
      stylers: [{ visibility: "on" }, { color: "#ffffff" }, { lightness: 16 }],
    },
    {
      elementType: "labels.text.fill",
      stylers: [{ saturation: 36 }, { color: "#333333" }, { lightness: 40 }],
    },
    { elementType: "labels.icon", stylers: [{ visibility: "off" }] },
    {
      featureType: "transit",
      elementType: "geometry",
      stylers: [{ color: "#f2f2f2" }, { lightness: 19 }],
    },
    {
      featureType: "administrative",
      elementType: "geometry.fill",
      stylers: [{ color: "#fefefe" }, { lightness: 20 }],
    },
    {
      featureType: "administrative",
      elementType: "geometry.stroke",
      stylers: [{ color: "#fefefe" }, { lightness: 17 }, { weight: 1.2 }],
    },
  ];
  data: Date = new Date();
  focus;
  focus1;
  focus2;
  focus3;
  focus4;
  dropdownList = [
    { id: 1, itemName: "Roman" },
    { id: 2, itemName: "Paris" },
    { id: 3, itemName: "Bucharest" },
    { id: 4, itemName: "Rome" },
    { id: 5, itemName: "New York" },
    { id: 6, itemName: "Miami" },
    { id: 7, itemName: "Piatra Neamt" },
    { id: 8, itemName: "Paris" },
    { id: 9, itemName: "Bucharest" },
    { id: 10, itemName: "Rome" },
    { id: 11, itemName: "New York" },
    { id: 12, itemName: "Miami" },
    { id: 13, itemName: "Piatra Neamt" },
  ];
  selectedItems = [];
  dropdownList1 = [
    { id: 1, itemName: "Roman" },
    { id: 2, itemName: "Paris" },
    { id: 3, itemName: "Bucharest" },
    { id: 4, itemName: "Rome" },
    { id: 5, itemName: "New York" },
    { id: 6, itemName: "Miami" },
    { id: 7, itemName: "Piatra Neamt" },
    { id: 8, itemName: "Paris" },
    { id: 9, itemName: "Bucharest" },
    { id: 10, itemName: "Rome" },
    { id: 11, itemName: "New York" },
    { id: 12, itemName: "Miami" },
    { id: 13, itemName: "Piatra Neamt" },
  ];
  selectedItems1 = [];

  constructor() {}

  ngOnInit() {
    var rellaxHeader = new Rellax(".rellax-header");

    var body = document.getElementsByTagName("body")[0];
    body.classList.add("contact-page");
    var navbar = document.getElementsByTagName("nav")[0];
    navbar.classList.add("navbar-transparent");
  }

  ngOnDestroy() {
    var body = document.getElementsByTagName("body")[0];
    body.classList.remove("contact-page");
    var navbar = document.getElementsByTagName("nav")[0];
    navbar.classList.remove("navbar-transparent");
  }
}
