# Wanderlust Architecture

## Purpose

This document describes the architecture and data flow of the Wanderlust application to ensure clarity and maintainability.

## 1. Overview

Wanderlust is a travel-stay marketplace where users can browse listings, view details, and (future) book stays.

### Tech Stack:

- **Frontend**: React + Vite
- **Backend**: Node.js + Express
- **Database**: MongoDB
- **Search**: Elasticsearch
- **Cloud Service Provider**: ImageKit
- **Auth**: JWT(access + refresh tokens)

---

## 2. High-Level Architecture

Frontend (React + Vite)  
↓  
Backend API (Node.js + Express)  
↓  
Primary datastore: MongoDB  
Search index: Elasticsearch  
↓  
External services:

- **ImageKit** for image hosting
- **Email/OTP service** for notifications/auth

---

## 3. Frontend Structure

### Main Parts

- **Pages**: Home, Listings, Listing Details, User Profile(yet to be implemented)

### Components

#### Common UI components

- **Navbar**: Handle Navigation across the app
- **Footer**: displays links and basic information

#### Listing Components

- **SearchBar**: Allow users to search for listings
- **ListingUI**: Display listing information, **ListingGallery**: Displays listing images
- **BookingCard**: handles booking UI and price calculation

#### Booking Components

- **BookingCard**: Allow users to book the listing

#### Review Components

1. **ReviewsSection**: displays user reviews and ratings

### Context

- **AuthContext** (global auth state)

### API Layer

- **Axios client with interceptors**

### Responsibility

- **Render UI**
- **Handle user interaction**
- **Call backend APIs**

---

## 4. Backend Structure

### Main parts

- **Routes** → define endpoints
- **Controllers** → handle request logic
- **Models** → MongoDB schemas
- **Middleware** → auth, error handling

### Responsibility

1. Business logic
2. Authentication
3. Data validation
4. Communication with DB & services

---

## 5. Data Layer

### MongoDB:

- Stores users, listings, reviews

### Elasticsearch:

- Stores indexed listing data for fast search

---

## 6. Authentication Flow

Access token → short-lived → used in headers
Refresh token → long-lived → stored in cookie → used silently to get new access token when expired

## Authentication Flow

Access tokens are short-lived and sent in the Authorization header.  
Refresh tokens are long-lived and stored in HTTP-only cookies.

---

### Secure SPA Auth Pattern

Memory (access token)
+ 
HTTP-only cookie (refresh token)

---

### App Load (Auth Restore Flow)

1. App loads
2. Frontend calls `/auth/rotate-token`
3. Backend reads refresh token from HTTP-only cookie

4. If refresh token is valid:
   - Generate new access token
   - (Optionally rotate refresh token)
   - Return access token to frontend
   - Frontend stores access token (in memory(runtime only)/localStorage)
   - Access token is attached to API requests via Authorization header
   - Frontend calls `getUser()` → internally makes request to `/auth/me`
   - `setUser()` updates auth context with user data

5. If refresh token is missing or invalid:
   - Backend returns 401 Unauthorized
   - Frontend clears any existing tokens
   - `setUser(null)`
   - App continues in unauthenticated state

---

### On page reload

Memory cleared
↓
No access token
↓
Frontend calls /rotate-token
↓
Backend uses cookie (refresh token)
↓
New access token returned
↓
Stored again in memory

---

### Login Flow

1. User submits form
2. API returns token + user
3. Token stored
   (Access token in headers, refresh token in HTTP-only cookie)
4. User stored in context

---

## 7. Listing Flow

### Create Listing

1. User submits form
2. Save in MongoDB
3. Index in Elasticsearch

### Get Listings

1. Frontend sends request to /listings
2. Backend fetches listings from MongoDB
3. Returns data to frontend
4. UI renders listings

### Search (yet to be implemented)

1. User types in SearchBar
2. Input is debounced
3. API request sent to /search
4. Backend queries Elasticsearch
5. Results returned to frontend

---

## 8. API Layer

### Axios interceptors

1. Automatically attach access token to Authorization header
2. Detect 401 (token expired)
3. Call /auth/rotate-token
4. Store new token
5. Retry original request

---

## 9. Future Enhancements

- **Booking System**: Implement booking flow with availability checks and payment integration.
- **User Profiles**: Allow users to view and edit their profiles, see booking history, and manage listings.
- **Admin Dashboard**: For managing listings, users, and reviews.
- **Host Dashboard**: For hosts to manage their listings, view bookings, and communicate with guests.
- **Real-time Notifications**: Implement real-time notifications for booking updates and messages.
- **Enhanced Search**: Add filters, sorting, and more advanced search capabilities.
- **OPENAI Integration**: Use AI for personalized recommendations and chat support

---
