import { Box, Typography, Link } from "@mui/material";
import location from "../assets/locatoin.png";


export default function Location() {
  return (
    <Box sx={{ px: { xs: 2, md: 6 }, pt: 5}}>
      {/* Info Section */}
      <Box className="info" sx={{ textAlign: "center", mb: 4 }}>
        <Typography variant="h3" sx={{ mb: 2 }}>
          Soukaina Bakery in Hamburg
        </Typography>

        <Typography sx={{ mb: 2, maxWidth: "800px", mx: "auto" }}>
          We’re thrilled to welcome you to our Hamburg location! Visit us in the
          charming district of Wandesbeck, perfectly situated in the vibrant
          northern part of the city. Explore the map below for easy navigation,
          and feel free to reach out anytime—our team is always happy to assist
          you.
        </Typography>

        <Typography sx={{ mb: 2, maxWidth: "800px", mx: "auto" }}>
          At Soukaina Cakery, we bring joy to every celebration with our cake
          delivery service across Hamburg. Enjoy affordable delivery rates and
          trusted couriers who ensure your cakes arrive fresh, beautiful, and
          right on time. Need something on short notice? We accept urgent cake
          orders with just 3 to 4 days of preparation time. Our speciality lies
          in crafting fully customised cakes that reflect your event’s theme and
          your favourite flavours.
        </Typography>

        <Typography variant="h4" sx={{ mt: 4, mb: 2 }}>
          Welcome to Our Premium Home Delivery Service!
        </Typography>

        <Typography sx={{ mb: 2, maxWidth: "800px", mx: "auto" }}>
          <strong>Home Delivery:</strong> We bring the sweetness to your
          doorstep! Orders can be delivered to your address with an extra fee.
          <br />
          <strong>Pickup Location:</strong> Prefer to pick up your order? Visit
          us in Hamburg.
          <br />
          <strong>Ordering Details:</strong>
        </Typography>
        <ul
          style={{
            textAlign: "left",
            maxWidth: "600px",
            margin: "0 auto 2rem auto",
          }}
        >
          <li>
            Orders must be placed 2 days in advance for greater security,
            preparation, and availability.
          </li>
          <li>
            We're available for orders and inquiries from Tuesday to Saturday.
          </li>
        </ul>
      </Box>

      {/* Map and Contact Section */}
      <Box
        className="container"
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          justifyContent: "space-between",
          gap: 4,
          px: { xs: 2, md: 6 },
          pb: { xs: 8, md: 12 }, // extra padding for fixed footer
        }}
      >
        {/* Map - Left Side (65%) */}
        <Box
          className="location-info"
          sx={{
            flex: { xs: "100%", md: "65%" },
            textAlign: "center",
            borderRadius: 2,
            overflow: "hidden",
            boxShadow: 3,
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Typography
            variant="h4"
            sx={{
              mb: 2,
              bgcolor: "#2fba4d",
              color: "white",
              py: 1,
              borderRadius: "8px 8px 0 0",
            }}
          >
            Our Cake Shop:
          </Typography>
          <Box sx={{ flex: 1 }}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4738.618066796677!2d10.057144275665129!3d53.570101057959285!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47b18eabf9d5db3b%3A0x44dfca429ae46dc4!2sWandsbeker%20Chaussee!5e0!3m2!1sde!2sse!4v1764582926344!5m2!1sde!2sse"
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: "450px" }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Soukaina Bakery Location"
            ></iframe>
          </Box>
        </Box>

        {/* Contact Info - Right Side (35%) */}
        <Box
          className="contact-info"
          sx={{
            flex: { xs: "100%", md: "35%" },
            textAlign: "center",
            bgcolor: "#f7f7f7",
            p: 4,
            borderRadius: 2,
            boxShadow: 3,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            minHeight: "450px", // same height as map
          }}
        >
          <img
            src={location}
            alt="Location Icon"
            style={{ width: "60px", marginBottom: "1rem", alignSelf: "center" }}
          />
          <Typography variant="h5" sx={{ mb: 2 }}>
            Address
          </Typography>
          <Typography
            component="address"
            sx={{ fontStyle: "normal", lineHeight: 1.8 }}
          >
            Soukaina Cakery
            <br />
            22089 Wandesbeck Chaussee
            <br />
            Hamburg
            <br />
            Phone: <Link href="tel:015906810054">015906810054</Link>
            <br />
            Email:{" "}
            <Link href="mailto:Souka.janati@gmail.com">
             soukainaidrissi60@gmail.com
            </Link>
          </Typography>
        </Box>
      </Box>

      {/* Contact Prompt */}
      <Typography
        variant="h5"
        sx={{
          mt: 6,
          mb: 4,
          textAlign: "center",
          px: { xs: 2, md: 6 },
        }}
      >
        <strong>Contact us for more information.</strong>
      </Typography>
    </Box>
  );
}
