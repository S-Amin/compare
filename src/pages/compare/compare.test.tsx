import React from "react";
import { render, waitFor, fireEvent } from "@testing-library/react";
import Compare from ".";
import axios from "config/axios.config";

const products = [
  {
    Artikelnummer: "115E19",
    BUP_Conversion: "",
    BUP_UOM: "",
    BUP_Value: "",
    Hardheid: "70",
    "Inwendige diameter": "1.25",
    Kleur: "Zwart",
    "Maat volgens AS568": "102",
    Materiaal: "EPDM",
    Snoerdikte: "2.62",
    Temperatuurgebied: "van  -50  tot  150",
    Toepassing: "Voedsel en dranken",
    atp: {},
    badges:
      "https://eriksdigitalcdn.azureedge.net/shop/thumb40/hlr-system/egt/pubnl/pim_icons/rohs-icon-nl.jpg|https://eriksdigitalcdn.azureedge.net/shop/thumb40/hlr-system/egt/pubnl/pim_icons/rohs-icon-nl.jpg|https://eriksdigitalcdn.azureedge.net/shop/thumb40/hlr-system/egt/pubnl/pim_icons/omega-slang-icon-nl.jpg|https://eriksdigitalcdn.azureedge.net/shop/thumb40/hlr-system/egt/pubnl/pim_icons/o-t-symbol-icon-nl.jpg",
    channel: "nl_NL",
    display: true,
    grossPrice: "1.71",
    listPrice: "1.41",
    manufacturerImage: "",
    manufacturerName: "",
    minQuantity: "5",
    name:
      "O-ring EPDM 70 shore - Voedsel (Binnen Ø=1.25 Snoer Ø=2.62; AS568- 102)",
    productImage:
      "https://eriksdigitalcdn.azureedge.net/shop/thumb/hlr-system/egt/pubnl/industriele slangen/rubber slangen/chemieslangen/rubber-chemieslang-rx-ultrafixx-md-pinl-nl.jpg",
    salePrice: "1.41",
    sku: "115E19",
    stepQuantity: "5",
    uom: "Stuk",
  },
  {
    name: "testw",
    Artikelnummer: "115E19",
    BUP_Conversion: "",
    BUP_UOM: "",
    BUP_Value: "",
    Hardheid: "70",
    "Inwendige diameter": "1.25",
    Kleur: "Zwart",
    "Maat volgens AS568": "102",
    Materiaal: "EPDM",
    Snoerdikte: "2.62",
    Temperatuurgebied: "van  -50  tot  150",
    Toepassing: "Voedsel en dranken",
    atp: {},
    badges:
      "https://eriksdigitalcdn.azureedge.net/shop/thumb40/hlr-system/egt/pubnl/pim_icons/rohs-icon-nl.jpg|https://eriksdigitalcdn.azureedge.net/shop/thumb40/hlr-system/egt/pubnl/pim_icons/rohs-icon-nl.jpg|https://eriksdigitalcdn.azureedge.net/shop/thumb40/hlr-system/egt/pubnl/pim_icons/omega-slang-icon-nl.jpg|https://eriksdigitalcdn.azureedge.net/shop/thumb40/hlr-system/egt/pubnl/pim_icons/o-t-symbol-icon-nl.jpg",
    channel: "nl_NL",
    sku: "d23d2",
  },
  {
    name: "test",
    Materiaal: "EPDM",
    Snoerdikte: "2.62",
    Temperatuurgebied: "van  -50  tot  150",
    Toepassing: "Voedsel en dranken",
    sku: "115derf54E19",
  },
];

test("compare components", async () => {
  const res = { data: { products } };
  const mockedAxios = jest.spyOn(axios, "get");
  mockedAxios.mockResolvedValueOnce(res);

  const { getAllByRole, container, getByLabelText } = render(<Compare />);

  expect(mockedAxios).toHaveBeenCalled(); // check if api is called
  await waitFor(() => {
    expect(getAllByRole("table")).toHaveLength(1); // check the table render
    expect(container.querySelectorAll("th")).toHaveLength(4); // check the columns
  });

  // check if the remove btn works
  const removeBtn = container.getElementsByClassName("remove")[0];
  fireEvent.click(removeBtn);
  expect(container.querySelectorAll("th")).toHaveLength(3);

  // check if the hide/show input works
  const inputSelector = getByLabelText(products[1].name);
  fireEvent.click(inputSelector);
  const table = container.getElementsByTagName("table")[0];
  expect(table).toHaveClass("hide_c2");
});
