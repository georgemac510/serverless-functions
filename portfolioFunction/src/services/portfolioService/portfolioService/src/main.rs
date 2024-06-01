#![allow(non_snake_case)]
use marine_rs_sdk::marine;
use marine_rs_sdk::module_manifest;
use ureq::get;
use serde_json::Value;

module_manifest!();

pub fn main() {}

#[marine]
pub fn fetch_portfolio_data() -> String {
    let url = "https://orbitdb-server.ngrok.dev/api/query/id?id=John";
    println!("Fetching data from {}", url); // Debug log
    match get(url).call() {
        Ok(response) => {
            let body = response.into_string().unwrap();
            println!("Response body: {}", body); // Debug log
            let json: Value = serde_json::from_str(&body).unwrap();
            format!("{:?}", json)
        },
        Err(err) => {
            println!("Error: {:?}", err); // Debug log
            format!("Error: {:?}", err)
        },
    }
}








