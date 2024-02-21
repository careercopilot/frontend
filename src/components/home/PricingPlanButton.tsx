"use client";

import { useUser } from "@/hooks/user.swr";
import API_CONSTANTS from "@/utils/apiConstants";
import { genericMutationFetcher } from "@/utils/helpers/swr.helper";
import { staticData } from "@/utils/staticData";
import { Button } from "@mantine/core";
import Link from "next/link";
import useSWRMutation from "swr/mutation";

const { pricing: COMPONENT_DATA } = staticData.pages.index;
const { content: GENERAL_CONTENT } = staticData.general;
const { icons: ICONS } = staticData.general;

function PricingPlanButton({
  plan,
}: {
  plan: (typeof COMPONENT_DATA)["plans"][0];
}) {
  const { userData } = useUser();

  const { trigger, isMutating } = useSWRMutation(
    API_CONSTANTS.CHECKOUT_PLAN,
    genericMutationFetcher
  );

  const handlePlanPurchase = async () => {
    try {
      const { data: res } = await trigger({
        type: "post",
        rest: [
          {
            plan: plan.id,
          },
        ],
      });
      console.log("Plan Checkout Response", res);
      const ckecoutURL = res?.checkoutURL;
      window.open(ckecoutURL, "_blank");
    } catch (error) {
      console.error("Error purchasing plan", error);
    }
  };

  return (
    <>
      {userData ? (
        <Button
          variant={plan.highlight ? "white" : "filled"}
          size="lg"
          style={{
            borderRadius: 990,
          }}
          mt={20}
          component={"button"}
          onClick={handlePlanPurchase}
          loading={isMutating}
        >
          {userData ? COMPONENT_DATA.subscribe : COMPONENT_DATA.getStarted}
        </Button>
      ) : (
        <Button
          variant={plan.highlight ? "white" : "filled"}
          size="lg"
          style={{
            borderRadius: 990,
          }}
          mt={20}
          component={Link}
          href="/?modal=register"
        >
          {userData ? COMPONENT_DATA.subscribe : COMPONENT_DATA.getStarted}
        </Button>
      )}
    </>
  );
}

export default PricingPlanButton;
