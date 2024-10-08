import TicketForm from '@/app/(components)/TicketForm'
import React from 'react'


const getTicketById = async (id) => {
  const apiBaseUrl = process.env.REACT_APP_API_BASE_URL || "http://localhost:3000/api";
  try {
    const res = await fetch(`${apiBaseUrl}/Tickets/${id}`, {
      cache: "no-store",
    });

    if (!res.ok) {
      throw new Error("Failed to fetch topic");
    }

    return res.json();
  } catch (error) {
    console.log(error);
  }
};


let updateTicketData = {};
const TicketPage = async({params}) => {

  const EDITMODE = params.id === "new" ? false : true;

  if (EDITMODE) {
    updateTicketData = await getTicketById(params.id);
    updateTicketData = updateTicketData.foundTicket;
  } else {
    updateTicketData = {
      _id: "new",
    };
  }
  
  return (
    <div><TicketForm ticket={updateTicketData}/></div>
  )
}

export default TicketPage