import { CollectionAfterChangeHook } from 'payload/types';

const validateAfterChange: CollectionAfterChangeHook = ({doc, req}) => {
  fetch(`${process.env.PAYLOAD_PUBLIC_REVALIDATE_URL}/?secret=${process.env.PAYLOAD_PUBLIC_REVALIDATE_TOKEN}&category=${req.collection.config.slug}&slug=${doc.slug}`).then((res) => {
    console.log(res);
  }).catch((err) => {
    console.log(err);
  });
}

export default validateAfterChange;