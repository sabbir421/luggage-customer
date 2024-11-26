export default async function handler(req, res) {
  console.log(process.env.NEXT_PUBLIC_API);

  if (req.method === "POST") {
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API}/payment/create-checkout-session`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(req.body),
        }
      );

      const data = await response.json();
      res.status(200).json(data);
    } catch (error) {
      res.status(500).json({ error: "Failed to contact backend" });
    }
  }
}
