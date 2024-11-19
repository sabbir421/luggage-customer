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
      question: "What is Nannybag luggage storage?",
      answer:
        "Nannybag is a secure luggage storage solution that partners with trusted local businesses.",
    },
    {
      question: "How to book luggage storage?",
      answer:
        "Simply search for your location, choose a storage spot, and book online.",
    },
    {
      question: "Is there left luggage near me?",
      answer:
        "Yes, you can find locations near you by using our search feature.",
    },
    {
      question: "How much does luggage storage cost?",
      answer: "Prices start as low as £5 per bag for 24 hours.",
    },
    {
      question: "What does the Nannybag protection cover?",
      answer: "Your bags are insured up to £1000 during storage.",
    },
    {
      question: "What can I store in the left luggage?",
      answer: "You can store suitcases, backpacks, and other personal items.",
    },
    {
      question: "Is storing bulky luggage more expensive?",
      answer: "No, prices are based on a per-bag rate, regardless of size.",
    },
    {
      question: "Is there left luggage near me?",
      answer:
        "Yes, you can find locations near you by using our search feature.",
    },
    {
      question: "How much does luggage storage cost?",
      answer: "Prices start as low as £5 per bag for 24 hours.",
    },
    {
      question: "What does the Nannybag protection cover?",
      answer: "Your bags are insured up to £1000 during storage.",
    },
    {
      question: "What can I store in the left luggage?",
      answer: "You can store suitcases, backpacks, and other personal items.",
    },
    {
      question: "Is storing bulky luggage more expensive?",
      answer: "No, prices are based on a per-bag rate, regardless of size.",
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
