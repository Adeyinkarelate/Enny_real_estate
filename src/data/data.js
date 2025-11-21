import logo from '../assets/logo.svg'
import logo_dark from '../assets/logo_dark.svg'
import cross_icon from '../assets/cross_icon.svg'
import menu_icon from '../assets/menu_icon.svg'
import star_icon from '../assets/star_icon.svg'
import left_arrow from '../assets/left_arrow.svg'
import right_arrow from '../assets/right_arrow.svg'

import brand_img from '../assets/brand_img.png'
import headerImg from '../assets/header_img.png'
import abk from '../assets/abk.jpg'
import abk2 from '../assets/abk2.jpeg'
import bud1 from '../assets/bud1.jpg'
import bud2 from '../assets/bud2.jpg'
import est1 from '../assets/est1.png'
import est2 from '../assets/est2.jpg'
import est3 from '../assets/est3.jpg'

// Try to import project images with error handling


export const assets = {
    headerImg,
    logo,
    logo_dark,
    cross_icon,
    menu_icon,
    star_icon,
    brand_img,
    left_arrow,
    right_arrow,
};

export const projectsData = [
    {
        id: 'project-1',
        title: "Skyline Haven",
        price: "$250,000",
        location: "California",
        image: est1
    },
    {
        id: 'project-2',
        title: "Vista Verde",
        price: "$250,000",
        location: "San Francisco",
        image: est2
    },
    {
        id: 'project-3',
        title: "Serenity Suites",
        price: "$250,000",
        location: "Chicago",
        image: est3
    },
    {
        id: 'project-4',
        title: "Central Square",
        price: "$250,000",
        location: "Los Angeles",
        image: est3
    },
    {
        id: 'project-5',
        title: "Palm Heights",
        price: "$250,000",
        location: "San Francisco",
        image: est3
    },
    {
        id: 'project-6',
        title: "Ocean Breeze",
        price: "$250,000",
        location: "Chicago",
        image: est3
    },
];

export const properties = {
    estate: [
        {
            id: 'estate-1',
            title: 'Skyline Haven Estate',
            description: 'Modern 4 bedroom estate with premium amenities',
            image: est1,
            price: "#250,000,000",
            location: "California",
            details: 'This 4-bedroom estate features 3 bathrooms, 500 sqft living space on 0.5 acres. Includes gourmet kitchen, smart home tech, and infinity pool.',
            features: ['Smart Home', 'Infinity Pool', 'Home Theater', 'Wine Cellar']
        },
        {
            id: 'estate-2',
            title: 'Vista Verde Estate',
            description: 'Modern 5 bedroom estate with premium amenities',
            image: est2,
            price: "#350,000,000",
            location: "San Francisco",
            details: 'This 5-bedroom estate features 4 bathrooms, 1000 sqft living space on 1.5 acres. Includes gourmet kitchen, smart home tech, and infinity pool.',
            features: ['Smart Home', 'Infinity Pool', 'Home Theater', 'Wine Cellar']
        },
        {
            id: 'estate-3',
            title: 'Serenity Suites Estate',
            description: 'Modern 6 bedroom estate with premium amenities',
            image:est3,
            price: "#450,000,00",
            location: "Chicago",
            details: 'This 6-bedroom estate features 5 bathrooms, 1500 sqft living space on 2.5 acres. Includes gourmet kitchen, smart home tech, and infinity pool.',
            features: ['Smart Home', 'Infinity Pool', 'Home Theater', 'Wine Cellar']
        }
    ],

    residential: [
        {
            id: 'residential-1',
            title: 'Urban Residence',
            description: 'Contemporary 2 bedroom home in prime location',
            image: bud1,
            price: "#180,000",
            location: "AbeoKuta",
            details: 'Modern 2-bedroom townhome with open-concept living and smart features.',
            address: '1230 Main St, City 1',
            specs: [
                { label: 'Bedrooms', value: 2 },
                { label: 'Bathrooms', value: 1.5 },
                { label: 'Square Feet', value: 1200 }
            ]
        },
        {
            id: 'residential-2',
            title: 'Urban Residence',
            description: 'Contemporary 2 bedroom home in prime location',
            image: bud2,
            price: "#180,000",
            location: "Ibadan",
            details: 'Modern 2-bedroom townhome with open-concept living and smart features.',
            address: '1230 Main St, City 1',
            specs: [
                { label: 'Bedrooms', value: 2 },
                { label: 'Bathrooms', value: 1.5 },
                { label: 'Square Feet', value: 1200 }
            ]
        }
    ],

    land: [
        {
            id: 'land-1',
            title: 'Development Plot',
            description: '5 acre prime development land',
            image: abk2,
            price: "#150,000",
            location: "Abuja",
            details: '5-acre parcel with utilities, approved for mixed-use development.',
            zoning: ['Residential', 'Commercial', 'Mixed-Use'],
            coordinates: '40.7123° N, 74.65° W'
        },
        {
            id: 'land-2',
            title: 'Development Plot',
            description: '1plot  prime development land',
            image: abk,
            price: "#150,000,00",
            location: "Abeokuta",
            details: '5-acre parcel with utilities, approved for mixed-use development.',
            zoning: ['Residential', 'Commercial', 'Mixed-Use'],
            coordinates: '40.7123° N, 74.65° W'
        }
    ]
};

export const info = [
  {
    image: est3, // Replace with actual path
    title: 'Residential Development',
    content: `Our expertise lies in crafting high-end, off-plan residential developments across Ikoyi, Banana Island, and Abuja. We specialize in custom homes for discerning individuals who value exclusivity.`,
    projects: `Featured developments include Medici Ikoyi, By ENNY ESTATE AGENT AND REALTORS, Lucrezia De Medici, and the iconic Leonardo tower in Banana Island. We also lead the ENNY ESTATE AGENT AND REALTORS Smart City initiative in Lagos and Abuja.`,
  },
  {
    image: est2,
    title: 'Luxury Apartments',
    content: `We design and deliver world-class apartments that combine architectural excellence with smart living solutions, tailored for Nigeria's elite.`,
    projects: `Notable works include Giuliano, Leonardo Towers, and other private commissions within Nigeria's most prestigious neighborhoods.`,
  },
  {
    image: est1,
    title: 'Smart City Projects',
    content: `ENNY ESTATE AGENT AND REALTORS Smart City represents the future of urban living—blending technology, comfort, and sustainable design.`,
    projects: `Currently in development across Lagos and Abuja, these projects redefine modern luxury with innovation and purpose.`,
  },
];





