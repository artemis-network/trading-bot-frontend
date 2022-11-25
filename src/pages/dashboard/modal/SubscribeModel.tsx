import { Box, Button, Flex, Text, useToast } from "@chakra-ui/react";
import { useFormik } from "formik";
import { AiOutlineCheckCircle, AiOutlineClose } from "react-icons/ai";
import useRazorpay from "react-razorpay";
import FormField from "../../auth/componetns/FormField";
import { BotModel, DashBoardServices } from "../DashboardServices";

const SubscribeModal = (props: BotModel) => {
  const Razorpay = useRazorpay();
  const toast = useToast();
  const form = useFormik({
    initialValues: { apiKey: "", apiSecret: "" },
    onSubmit: async (values: any) => {
      const order = await DashBoardServices.createOrder(
        Number(props.pricePerMonth) * 100
      );
      const options = {
        key: "rzp_test_VmSch4maQMZS9L", // Enter the Key ID generated from the Dashboard
        amount: order.amount, // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
        currency: "INR",
        name: "Trade Bot",
        description: "Bot Subscription",
        order_id: order.id, //This is a sample Order ID. Pass the `id` obtained in the response of createOrder().
        prefill: {
          name: "Piyush Garg",
          email: "youremail@example.com",
          contact: "9999999999",
        },
        notes: {
          address: "Razorpay Corporate Office",
        },
        theme: {
          color: "#3399cc",
        },
        handler: async function (response: any) {
          await DashBoardServices.subscribe({
            amount: order.amount,
            razorpayPaymentId: response.razorpay_payment_id,
            razorpayOrderId: response.razorpay_order_id,
            razorPaySignature: response.razorpay_signature,
            userId: localStorage.getItem("userId") || "",
            botId: props._id,
            apiKey: values.apiKey,
            apiSecret: values.apiSecret,
          })
            .then((res: any) => {
              setTimeout(() => {
                window.location.reload();
              }, 5000);
              return toast({
                title: "Payment Successful",
                description: "Tokens Deposited into your account",
                status: "success",
                duration: 5000,
                isClosable: true,
                position: "top",
              });
            })
            .catch((err: any) => {
              return toast({
                title: "Payment Unsuccessful",
                description: err,
                status: "error",
                duration: 5000,
                isClosable: true,
                position: "top",
              });
            });
        },
      };

      const rzp1 = new Razorpay(options);

      rzp1.on("payment.failed", function (response: any) {
        return toast({
          title: "Payment Unsuccessful",
          description: response.error.description,
          status: "error",
          duration: 5000,
          isClosable: true,
          position: "top",
        });
      });

      rzp1.open();
    },
  });

  return (
    <Box>
      <Box>
        <Text>Bot : {props.name}</Text>
        <Text>Coin : {props.coin}</Text>
        <Text>Price : {props.pricePerMonth}$</Text>
        <Text>Exchange : {props.exchange}</Text>
        <Text>Market : {props.market}</Text>
        <Flex columnGap={"1rem"} alignItems={"center"}>
          <Text>Status</Text>
          {props.status ? (
            <AiOutlineCheckCircle color="green" />
          ) : (
            <AiOutlineClose color="red" />
          )}
        </Flex>
      </Box>
      <FormField
        name="apiKey"
        placeHolder="Api key"
        value={form.values.apiKey}
        onChange={form.handleChange}
        label="Api key"
        type="text"
        isRequired={true}
      />
      <FormField
        name="apiSecret"
        placeHolder="Api secret"
        value={form.values.apiSecret}
        onChange={form.handleChange}
        label="Api secret"
        type="text"
        isRequired={true}
      />
      <Box mt={8} mb={4}>
        <Button onClick={() => form.handleSubmit()}>Buy</Button>
      </Box>
    </Box>
  );
};

export default SubscribeModal;
