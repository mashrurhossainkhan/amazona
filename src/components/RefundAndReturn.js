import { useEffect } from 'react';

const RefundAndReturn = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div style={{ marginLeft: '12px', marginRight: '12px' }}>
      <h1>Return:</h1>
      <ul>
        <li>
          If your product is damaged, defective, incorrect or incomplete at the
          time of delivery, It is your duty to confirm the defect to the
          delivery man and immediately contact with the seller.
        </li>

        <li>
          You can either negotiate about the product with the seller or directly
          return it through the delivery man. But this process should be done
          immediately.
        </li>

        <li>
          General products should be opened in front of the delivery man. If the
          product is not opened in front of the delivery man- Amazona or the
          seller will not take liability for any defect.
        </li>

        <li>
          All items to be returned or exchanged must be unused and in their
          original condition with all original tags and packaging intact and
          should not be broken or tampered with.
        </li>

        <li>
          Every client must place the payment to our delivery service provider
          and collect the cash memo from him.
        </li>

        <li>
          After the payment procedure, the order will be considered as
          successful and the customer can’t claim a return for that product.
        </li>
        <li>
          A customer can only return a product if the original product does not
          match with the description.
        </li>
      </ul>

      <h1>Refund:</h1>

      <ul>
        <li>Advanced payment will be returned within 10 days.</li>
        <li>
          Any Exchange or Return issue must be solved under 10 days duration
          from the date of delivery. After that time period none party would be
          able to place any request for exchange or return.
        </li>

        <li>
          Please note that the Cash on Delivery convenience charge and the
          shipping charge would not be included in the refund value of your
          order as these are non-refundable charges.
        </li>

        <li>
          Please note that Amazona is not obligated to refund the user&#39;s
          money what he/she paid until the product status changed to
          &quot;Returned&quot;.
        </li>

        <li>
          If you have selected Cash on Delivery (COD), there is no amount to
          refund because you haven&#39;t paid for your order.
        </li>

        <li>
          If online payment is made more than once due to technical error,
          payment refund will be made.
        </li>

        <h1>Order cancelation</h1>

        <ul>
          <li>
            Within 5 hours, a customer can cancel his order. To cancel the
            order, the customer has to call Amazona hotline and confirm his
            cancellation. The full amount of the advance payment will be
            returned in that case.
          </li>

          <li>
            If the customer does not pick up the phone of the delivery man, and
            if the product gets returned due to this, no amount of the advanced
            payment will be returned.
          </li>

          <li>
            If the customer changes his mind of not receiving the product and if
            the product is already in delivery phase- customer will not be
            returned any amount of advance payment.
          </li>

          <li>
            If the customer does not pay any advance payment (COD) and later
            change his mind for not accepting the product, he/she has to pay the
            delivery and other charge.
          </li>

          <li>
            It is an offensive practice to place an order and not accepting
            later even after completing confirmation procedures.
          </li>
        </ul>
      </ul>
    </div>
  );
};

export default RefundAndReturn;
