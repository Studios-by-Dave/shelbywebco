---
name: bright-data-scraper-studio-python-project
description: Use when the user wants to run web scraping jobs via Bright Data Scraper Studio using the Python CLI. Triggers on mentions of "bright data", "scraper", "web scraping", "scrape", or "Bright Data Scraper Studio".
---

# Bright Data Scraper Studio (Python)

A minimal Python wrapper for the Bright Data Scraper Studio Data Collection API. Trigger a collector job with a list of URLs, poll until results are ready, and download the collected data as JSON.

## Setup

```bash
cd bright-data-scraper-studio-python-project
pip install -r requirements.txt
cp .env.example .env
```

Edit `.env` with your Bright Data credentials:
- `BRIGHT_DATA_API_TOKEN` — from [Bright Data Dashboard → Account Settings → API Tokens](https://brightdata.com/cp/setting)
- `BRIGHT_DATA_COLLECTOR_ID` — your published Scraper Studio collector ID (starts with `c_`)

## Running

```bash
python index.py
```

The script:
1. POSTs to `/dca/trigger?collector=<id>` with the input URLs
2. Polls `/dca/dataset?id=<snapshot_id>` every 5 seconds for up to ~5 minutes
3. Saves results to `scraper_studio_results_<timestamp>.json`

## Configuration

Tune these at the top of `index.py`:
- `POLL_INTERVAL_S` (default: 5) — delay between dataset checks
- `MAX_POLL_ATTEMPTS` (default: 60) — max polling duration
- `MAX_RETRIES` (default: 3) — retries for transient HTTP failures
- `SAMPLE_URLS` — list of input dicts matching your collector's input schema

## Input Schema

Each item in `SAMPLE_URLS` must match the input schema defined in your Scraper Studio collector. Default assumes `{"url": "..."}`. For custom schemas (e.g., `{"keyword": "...", "country": "US"}`), update the dictionaries accordingly.

## Helpers

- `run_scraper(inputs)` — trigger and poll a collector job
- `trigger_with_url(url)` — trigger with a single URL
- `trigger_with_urls(urls)` — trigger with a list of URLs
- `save_results(data, filename)` — save raw JSON response to file

## Security

Never commit `.env`. The `.gitignore` blocks `.env` and `.env.local`. If a real API token is accidentally committed, rotate it immediately at [brightdata.com/cp/setting](https://brightdata.com/cp/setting).

## Example Output

```
Bright Data Scraper Studio
==============================
Starting Scraper Studio collector...
Queueing 3 input(s)
Job queued. Snapshot ID: j_abc123
Polling for results...
Attempt 1/60 - building
Attempt 2/60 - building
Results downloaded.
Saved to scraper_studio_results_2026-05-22T10-30-45-123456.json
Done.
```
