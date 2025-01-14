import React, { useState } from "react";
import {
  Box,
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  styled,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/Add";
import Image from "next/image";
const luggagePerson = require("../images/luggagePerson1.jpg");

const FAQContainer = styled("div")(({ theme }) => ({
  maxWidth: "100%",
  margin: "0 auto",
  padding: theme.spacing(4),
  display: "flex",
  gap: theme.spacing(4),
  alignItems: "flex-start",
  [theme.breakpoints.down("md")]: {
    flexDirection: "column",
  },
}));

const ImageContainer = styled(Box)(({ theme }) => ({
  flex: "1",
  position: "relative",
  width: "100%",
  height: "900px", // Adjust this height as needed
  borderRadius: "10px",
  overflow: "hidden",
}));

const FAQContent = styled(Box)(({ theme }) => ({
  flex: "1",
}));

const FAQTitle = styled(Typography)(({ theme }) => ({
  fontSize: "2rem",
  fontWeight: "bold",
  marginBottom: theme.spacing(3),
}));

const CustomAccordion = styled(Accordion)(({ theme }) => ({
  boxShadow: "none",
  borderBottom: `1px solid ${theme.palette.divider}`,
  "&:before": {
    display: "none",
  },
}));

const CustomAccordionSummary = styled(AccordionSummary)(({ theme }) => ({
  padding: 0,
  "& .MuiAccordionSummary-expandIconWrapper": {
    color: theme.palette.text.secondary,
  },
}));

const CustomAccordionDetails = styled(AccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2, 0),
  color: theme.palette.text.secondary,
}));

const FAQSection = () => {
  const [expanded, setExpanded] = useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  const faqData = [
    {
      question: "What is LuggageKeepers luggage storage?",
      answer:
        "LuggageKeepers is a secure luggage storage solution that partners with trusted local businesses to provide convenient storage options.",
    },
    {
      question: "How to book luggage storage with LuggageKeepers?",
      answer:
        "Simply search for your location on our website, choose a nearby storage spot, and book online in just a few clicks.",
    },
    {
      question: "Is there luggage storage near me?",
      answer:
        "Yes, you can easily find luggage storage locations near you by using our search feature with your current location or destination.",
    },
    {
      question: "How much does luggage storage cost with LuggageKeepers?",
      answer: "Prices start as low as £5 per bag for 24 hours, offering affordable and secure storage options.",
    },
    {
      question: "What does the LuggageKeepers protection cover?",
      answer: "Your bags are insured up to £1000 during the storage period for added peace of mind.",
    },
    {
      question: "What can I store with LuggageKeepers?",
      answer:
        "You can store suitcases, backpacks, and other personal items, as long as they comply with our storage policy.",
    },
    {
      question: "Is storing bulky luggage more expensive with LuggageKeepers?",
      answer:
        "No, prices are based on a per-bag rate, regardless of the size or weight of the luggage.",
    },
    {
      question: "How do I find the best luggage storage locations?",
      answer:
        "Use the LuggageKeepers search tool to filter by location, ratings, and operating hours to find the best option for your needs.",
    },
    {
      question: "Can I store my luggage overnight with LuggageKeepers?",
      answer:
        "Yes, our service allows you to store your luggage overnight or for multiple days with competitive pricing.",
    },
    {
      question: "Are LuggageKeepers storage locations secure?",
      answer:
        "Absolutely! We partner with vetted and trusted businesses to ensure your belongings are stored safely.",
    },
    {
      question: "Does LuggageKeepers have storage options near airports or train stations?",
      answer:
        "Yes, we offer convenient storage spots near major airports, train stations, and city centers worldwide.",
    },
    {
      question: "How do I cancel or modify my luggage storage booking?",
      answer:
        "You can easily modify or cancel your booking by accessing your account and following the instructions provided.",
    },
    {
      question: "Does LuggageKeepers offer discounts for multiple bags?",
      answer:
        "Yes, we provide discounts for group bookings or when storing multiple bags. Check our website for more details.",
    },
    {
      question: "What payment methods does LuggageKeepers accept?",
      answer:
        "We accept major credit cards, debit cards, and digital wallets like Apple Pay and Google Pay for your convenience.",
    },
    {
      question: "Can I book luggage storage in advance with LuggageKeepers?",
      answer:
        "Yes, you can book storage in advance to secure your spot and avoid last-minute hassle.",
    },
  ];
  

  return (
    <FAQContainer style={{marginTop:"30px"}}>
      {/* Left Image Section */}
      <ImageContainer>
        <Image
          src={luggagePerson}
          alt="Luggage storage"
          style={{height:"100%",width:"100%"}}
          quality={100}
        />
      </ImageContainer>

      {/* Right FAQ Section */}
      <FAQContent>
        <FAQTitle>Frequently Asked Questions</FAQTitle>
        {faqData.map((item, index) => (
          <CustomAccordion
            key={index}
            expanded={expanded === `panel${index}`}
            onChange={handleChange(`panel${index}`)}
          >
            <CustomAccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls={`panel${index}-content`}
              id={`panel${index}-header`}
            >
              <Typography>{item.question}</Typography>
            </CustomAccordionSummary>
            <CustomAccordionDetails>
              <Typography>{item.answer}</Typography>
            </CustomAccordionDetails>
          </CustomAccordion>
        ))}
      </FAQContent>
    </FAQContainer>
  );
};

export default FAQSection;
