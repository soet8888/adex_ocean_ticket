'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Tickets', [
      {
        name: 'ADEX Ocean Vision 2022 - Standard Pass on 16/09/22',
        desc: `Standard Pass Includes: 
        - 1 Day Multiple Entries
        - 1 x ADEX Bingo Game Ticket
        - 10% Off on all ADEX Merchandise (On Site)
        - 1 Copy of The Asian Diver Big Blue Book (Dedicated to Blue Whale)`,
        price: "10.00",
        saleDate: new Date('2022-08-16'),
        type: 'standard',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'ADEX Ocean Vision 2022 - Standard Pass on 17/09/22',
        desc: `Standard Pass Includes: 
        - 1 Day Multiple Entries
        - 1 x ADEX Bingo Game Ticket
        - 10% Off on all ADEX Merchandise (On Site)
        - 1 Copy of The Asian Diver Big Blue Book (Dedicated to Blue Whale)`,
        price: "10.00",
        saleDate: new Date('2022-08-17'),
        type: 'standard',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'ADEX Ocean Vision 2022 - Standard Pass on 18/09/22',
        desc: `Standard Pass Includes: 
        - 1 Day Multiple Entries
        - 1 x ADEX Bingo Game Ticket
        - 10% Off on all ADEX Merchandise (On Site)
        - 1 Copy of The Asian Diver Big Blue Book (Dedicated to Blue Whale)`,
        price: "10.00",
        saleDate: new Date('2022-08-18'),
        type: 'standard',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'ADEX Ocean Vision 2022 - VIP 3 Days Pass',
        desc: `VIP 3 Days Pass Includes: 
        - 3 Day Multiple Entries  
        - 6 x ADEX Bingo Game Ticket
        - 1 x ADEX Ocean Vision 2022 Official T-Shirt
        - 10% Off on all ADEX Merchandise (On Site)
        - 1 Copy of The Asian Diver Big Blue Book (Dedicated to Blue Whale)`,
        price: "50.00",
        saleDate: new Date('2022-08-18'),
        type: 'vip',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'ADEX Ocean Vision 2022 - VIP 3 Days Pass(Business)',
        desc: `Sales end on 16 Sep 2022
        VIP 3 Days Pass Includes: 
        - 3 Days Multiple Entries  
        - 6 x ADEX Bingo Game Ticket`,
        price: "100.00",
        saleDate: new Date('2022-08-16'),
        type: 'vip',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'ADEX One Day Entry for FREE (Register NOW!)',
        desc: `Free Admission Includes:
        - 1 Day Multiple Entry 
        - Applicable to admission on either day (16th - 18th September)`,
        price: "0.00",
        saleDate: new Date('2022-08-16'),
        type: 'free',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'ADEX Ocean Vision 2022 - Fashionably ADEX Pass',
        desc: `Sales end on 18 Sep 2022
        Fashionably ADEX Pass Includes: 
        - 1 Day Multiple Entries
        - 10% on all ADEX Merchandise (On Site)`,
        price: "0.00",
        saleDate: new Date('2022-08-18'),
        type: 'free',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'ADEX Ocean Vision 2022 - Friends of ADEX Pass',
        desc: `Friends of ADEX Pass Includes:
        - 1 Day Multiple Entries
        - 10% on all ADEX Merchandise (On Site)
        - Applicable to Dive Masters, Navy Personnel & Students. Proof of certification is required upon admission.`,
        price: "0.00",
        saleDate: new Date('2022-08-18'),
        type: 'free',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'ADEX Ocean Vision 2022 - Trade Visitor 3 Days Pass',
        desc: `Sales end on 18 Sep 2022
        Trade Visitor 3 Days Pass Includes: 
        - 3 Days Multiple Entries
        - 10% Off on all ADEX Merchandise (On Site)
        
        *     Please apply using business email address. 
        **   Name cards has to be presented upon admission
        *** Trade Visitor Passes are STRICTLY for members of the trade, industry professionals and press.  You must be attending the show in a professional capacity involved in a diving or ocean related industry.`,
        price: "0.00",
        saleDate: new Date('2022-08-18'),
        type: 'free',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'ADEX Ocean Vision 2022 - Volunteer Registration',
        desc: `Thank you for your interest in volunteering at ADEX Ocean Vision 2022.  We will contact you soon!`,
        price: "0.00",
        saleDate: new Date('2022-08-18'),
        type: 'free',
        createdAt: new Date(),
        updatedAt: new Date()
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Tickets', null, {});
  }
};
