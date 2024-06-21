"use client"
import { FunctionComponent, useState } from "react";
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
import { useRouter } from "next/navigation"; // Import useRouter hook
import TitleSection from "@/components/landing-page/title-section";
import Link from "next/link";

 const DonationAmount: FunctionComponent<{
  amount: number;
  value: number;
  setAmount: (value: number) => void;
}> = ({ amount, setAmount, value }) => {
  return (
    <span
      className={`px-4 py-2 font-semibold rounded-2xl text-black text-3xl cursor-pointer bg-white/40 ${
        amount === value ? "border" : ""
      } `}
      onClick={() => setAmount(value)}
    >
      ${value}
    </span>
  );
};

const Pricing = () => {
  const [amount, setAmount] = useState(39); // Initial amount state
  const [paymentSuccess, setPaymentSuccess] = useState(false); // State to manage payment success
  const router = useRouter(); // Initialize useRouter

  return (
    <section id="pricing" className="mt-20 px-4 sm:px-6 ">
      <TitleSection title="" subheading="" pill="Pricing" />
      <div className="grid place-items-center mt-10">
        <div className="flex flex-col items-center px-4 py-6 mx-auto space-y-4 rounded-md md:w-[500px] backdrop-blur-3xl border bg-white">
          <h1 className="text-5xl text-black/85 font-bold">Pay to Get Started</h1>
          <p className="textBlock-subtitle font-semibold text-rose-500">Choose any options below.</p>
          <Link href="/dashboard" className="textBlock-subtitle font-bold text-emerald-500">ALREADY PAID? CLICK HERE</Link>
          <div className="flex space-x-10">
            <DonationAmount value={39} setAmount={setAmount} amount={amount} />
          </div>
          <PayPalScriptProvider options={{ "clientId": "AZUaQ_HyK8Q-FMwkSupGjXSH3hzRo_9QcQEpzN2fhLcaOgnFmuNwUEnXiQUmBHi_heGIeddTB85i4tO1" }}>
            <div className="w-full flex justify-center mt-4 bg-transparent">
              <div className="paypal-button-container w-full max-w-[500px] bg-transparent">
                <PayPalButtons
                  style={{
                    layout: "vertical",
                    color: "silver",
                    shape: "pill",
                    label: "pay",
                    height: 50,
                  }}
                  createOrder={(_data, actions) => {
                    return actions.order.create({
                      intent: "CAPTURE",
                      purchase_units: [
                        {
                          amount: {
                            currency_code: "USD",
                            value: amount.toString(), // Ensure amount is dynamically updated
                          },
                        },
                      ],
                    });
                  }}
                  onApprove={(_data, actions) => {
                    if (actions.order) {
                      return actions.order.capture().then((details) => {
                        console.log(details);
                        setPaymentSuccess(true); // Set payment success state
                        router.push('/dashboard'); // Redirect to /dashboard
                      });
                    } else {
                      console.error("actions.order is undefined");
                      return Promise.reject("Order capture failed");
                    }
                  }}
                />
              </div>
            </div>
          </PayPalScriptProvider>
          {paymentSuccess && (
            <div className="mt-4 text-green-500 text-lg font-semibold">
              Payment Successful! Redirecting you to the dashboard in a moment.

            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
