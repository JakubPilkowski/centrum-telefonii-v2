import React from "react";

export default function Main() {
  return (
    <div
      style={{
        backgroundColor: "#000",
        color: "#fff",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontFamily: "Arial, sans-serif",
        padding: "20px",
        textAlign: "center",
      }}
    >
      <div style={{ maxWidth: "600px" }}>
        <h1 style={{ fontSize: "2rem", marginBottom: "1rem" }}>
          Strona została przeniesiona
        </h1>
        <p style={{ fontSize: "1.2rem", lineHeight: "1.6" }}>
          Strona internetowa www.centrum-telefonii.pl została przeniesiona na
          nowy adres{" "}
          <a
            href="https://uratuj-smartfona.pl"
            style={{
              color: "#ff6b35",
              textDecoration: "none",
              fontWeight: "bold",
            }}
            onMouseOver={(e) =>
              ((e.target as HTMLAnchorElement).style.textDecoration =
                "underline")
            }
            onMouseOut={(e) =>
              ((e.target as HTMLAnchorElement).style.textDecoration = "none")
            }
          >
            www.uratuj-smartfona.pl
          </a>
        </p>
        <p style={{ fontSize: "1.2rem", lineHeight: "1.6", marginTop: "1rem" }}>
          Kontakt telefoniczny:{" "}
          <a
            href="tel:604-436-345"
            style={{
              color: "#ff6b35",
              textDecoration: "none",
              fontWeight: "bold",
            }}
            onMouseOver={(e) =>
              ((e.target as HTMLAnchorElement).style.textDecoration =
                "underline")
            }
            onMouseOut={(e) =>
              ((e.target as HTMLAnchorElement).style.textDecoration = "none")
            }
          >
            604-436-345
          </a>
        </p>
      </div>
    </div>
  );
}
