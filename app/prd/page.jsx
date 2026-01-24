// 'use client'
// import { useState } from 'react';

// export default function Page() {
//     const [plan, setPlan] = useState('small');

//     const plans = {
//         small: {
//             features: [
//                 'Basic Product Catalog (listing & search)',
//                 'User Registration & Login',
//                 'Add to Cart & Checkout',
//                 'Order Tracking',
//                 'Basic Payment Gateway Integration'
//             ],
//             screens: { web: 5, app: 5 },
//             timeline: '4–6 weeks',
//             cost: '₹2,50,000',
//             maintenance: '₹10,000 – ₹15,000 / month'
//         },
//         medium: {
//             features: [
//                 'All Small Plan Features',
//                 'Prescription Upload & Verification',
//                 'Admin Dashboard (Products, Orders, Users)',
//                 'Push / SMS / Email Notifications',
//                 'B2B & B2C Pricing'
//             ],
//             screens: { web: 8, app: 7 },
//             timeline: '8–10 weeks',
//             cost: '₹5,00,000',
//             maintenance: '₹20,000 – ₹25,000 / month'
//         },
//         high: {
//             features: [
//                 'All Medium Plan Features',
//                 'Doctor & Hospital Portal',
//                 'Credit Limit & Wallet System',
//                 'Advanced Analytics & Reports',
//                 'AI-based Recommendations',
//                 'Multi-language Support (Optional)'
//             ],
//             screens: { web: 12, app: 10 },
//             timeline: '12–16 weeks',
//             cost: '₹8,00,000',
//             maintenance: '₹35,000 – ₹50,000 / month'
//         }
//     };

//     const techStack = [
//         ['Web Frontend', 'Next.js', 'SEO-friendly, fast, scalable web application'],
//         ['Mobile App', 'React Native', 'Single codebase for Android & iOS'],
//         ['Backend', 'Node.js + Express', 'Scalable REST APIs'],
//         ['Database', 'MongoDB', 'Flexible & scalable data storage'],
//         ['Authentication', 'JWT + OTP', 'Secure login & access control'],
//         ['Payments', 'Razorpay / Stripe', 'Secure online payments'],
//         ['Cloud', 'AWS / DigitalOcean', 'Hosting & scalability'],
//         ['File Storage', 'AWS S3', 'Prescriptions & product images'],
//         ['Notifications', 'Firebase / Twilio', 'Push, SMS & Email alerts'],
//         ['Monitoring', 'Sentry / CloudWatch', 'Error & performance monitoring']
//     ];

//     return (
//         <div className="max-w-7xl mx-auto p-6 font-sans text-gray-800">

//             {/* Header */}
//             <header className="mb-10">
//                 <h1 className="text-3xl font-bold">
//                     PharmaConnect – Product Requirement Document (PRD)
//                 </h1>
//                 <p className="text-gray-600">
//                     B2B + B2C Pharma E-Commerce Platform | Version 1.0 | Owner: Rahul Sharma
//                 </p>
//             </header>

//             {/* Overview */}
//             <section className="mb-8">
//                 <h2 className="text-2xl font-semibold mb-2">1. Product Overview</h2>
//                 <p>
//                     PharmaConnect is a full-stack pharma e-commerce platform designed for wholesalers
//                     to sell medicines directly to medical stores, hospitals, doctors, and end customers.
//                     The platform ensures regulatory compliance, prescription verification, inventory control,
//                     and secure payments.
//                 </p>
//             </section>

//             {/* Target Users */}
//             <section className="mb-8">
//                 <h2 className="text-2xl font-semibold mb-2">2. Target Users</h2>
//                 <ul className="list-disc list-inside">
//                     <li>Admin (Wholesaler Company)</li>
//                     <li>B2B Buyers (Medical Stores, Hospitals, Clinics)</li>
//                     <li>Doctors (Prescription-based ordering)</li>
//                     <li>B2C Customers (End Users)</li>
//                     <li>Delivery / Logistics Team (Future Phase)</li>
//                 </ul>
//             </section>

//             {/* Business Problem */}
//             <section className="mb-8">
//                 <h2 className="text-2xl font-semibold mb-2">3. Business Problem & Solution</h2>
//                 <p>
//                     Traditional pharma distribution relies heavily on manual ordering, phone calls,
//                     and offline billing, leading to delays, errors, and poor visibility.
//                 </p>
//                 <p className="mt-2">
//                     PharmaConnect digitizes the entire workflow — ordering, prescription validation,
//                     invoicing, and delivery — resulting in faster operations, reduced errors,
//                     and scalable growth.
//                 </p>
//             </section>

//             {/* Core Features */}
//             <section className="mb-8">
//                 <h2 className="text-2xl font-semibold mb-2">4. Core Features</h2>
//                 <ul className="list-disc list-inside">
//                     <li>Role-based authentication (Admin, B2B, Doctor, Customer)</li>
//                     <li>Medicine catalog with batch & expiry tracking</li>
//                     <li>Prescription upload & pharmacist verification</li>
//                     <li>Cart, checkout & GST invoice generation</li>
//                     <li>B2B bulk ordering & repeat orders</li>
//                     <li>Wallet / credit limit system for B2B</li>
//                     <li>Admin dashboard with reports & analytics</li>
//                 </ul>
//             </section>

//             {/* User Workflows */}
//             <section className="mb-8">
//                 <h2 className="text-2xl font-semibold mb-2">5. Real-World User Workflows</h2>

//                 <h4 className="font-semibold mt-2">B2C Customer Flow</h4>
//                 <ol className="list-decimal list-inside">
//                     <li>Signup using phone number (OTP)</li>
//                     <li>Browse medicines & upload prescription</li>
//                     <li>Prescription verified by pharmacist</li>
//                     <li>Payment & order confirmation</li>
//                     <li>Delivery & invoice</li>
//                 </ol>

//                 <h4 className="font-semibold mt-4">B2B Buyer Flow</h4>
//                 <ol className="list-decimal list-inside">
//                     <li>Admin approval with GST & license</li>
//                     <li>Access B2B pricing & credit</li>
//                     <li>Bulk or repeat orders</li>
//                     <li>Invoice & payment settlement</li>
//                 </ol>
//             </section>

//             {/* Compliance */}
//             <section className="mb-8">
//                 <h2 className="text-2xl font-semibold mb-2">6. Regulatory & Compliance</h2>
//                 <ul className="list-disc list-inside">
//                     <li>Drugs & Cosmetics Act compliance</li>
//                     <li>Mandatory prescription for Schedule H/H1 drugs</li>
//                     <li>Secure prescription storage (audit-ready)</li>
//                     <li>GST-compliant invoicing</li>
//                     <li>Admin & pharmacist action logs</li>
//                 </ul>
//             </section>

//             {/* Plans */}


//             {/* Tech Stack */}
//             <section className="mb-8">
//                 <h2 className="text-2xl font-semibold mb-2">8. Technology Stack</h2>
//                 <table className="w-full border-collapse border">
//                     <thead>
//                         <tr className="bg-gray-100">
//                             <th className="border px-3 py-2">Layer</th>
//                             <th className="border px-3 py-2">Technology</th>
//                             <th className="border px-3 py-2">Purpose</th>
//                         </tr>
//                     </thead>
//                     <tbody>
//                         {techStack.map((t, i) => (
//                             <tr key={i}>
//                                 <td className="border px-3 py-2">{t[0]}</td>
//                                 <td className="border px-3 py-2">{t[1]}</td>
//                                 <td className="border px-3 py-2">{t[2]}</td>
//                             </tr>
//                         ))}
//                     </tbody>
//                 </table>
//             </section>

//             {/* <section className="mb-8">
//                 <h2 className="text-2xl font-semibold mb-4">7. Development Plans</h2>

//                 <div className="flex space-x-4 mb-4">
//                     {['small', 'medium', 'high'].map(p => (
//                         <button
//                             key={p}
//                             onClick={() => setPlan(p)}
//                             className={`px-4 py-2 rounded font-medium ${plan === p ? 'bg-blue-600 text-white' : 'bg-gray-200'
//                                 }`}
//                         >
//                             {p.toUpperCase()}
//                         </button>
//                     ))}
//                 </div>

//                 <div className="bg-gray-50 p-4 rounded">
//                     <ul className="list-disc list-inside mb-3">
//                         {plans[plan].features.map((f, i) => (
//                             <li key={i}>{f}</li>
//                         ))}
//                     </ul>
//                     <p><b>Timeline:</b> {plans[plan].timeline}</p>
//                     <p><b>Web Screens:</b> {plans[plan].screens.web}</p>
//                     <p><b>App Screens:</b> {plans[plan].screens.app}</p>
//                     <p><b>Development Cost:</b> {plans[plan].cost}</p>
//                     <p><b>Maintenance:</b> {plans[plan].maintenance}</p>
//                 </div>
//             </section> */}
//             <section className="mb-10">
//                 <h2 className="text-2xl font-semibold mb-4">7. Development Plans & Scope Details</h2>

//                 {/* Plan Tabs */}
//                 <div className="flex space-x-4 mb-6">
//                     {['small', 'medium', 'high'].map(p => (
//                         <button
//                             key={p}
//                             onClick={() => setPlan(p)}
//                             className={`px-4 py-2 rounded font-medium ${plan === p ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-700'
//                                 }`}
//                         >
//                             {p.toUpperCase()}
//                         </button>
//                     ))}
//                 </div>

//                 {/* Plan Details */}
//                 <div className="bg-gray-50 p-6 rounded border">

//                     <h3 className="text-xl font-semibold mb-3">
//                         {plan.toUpperCase()} PLAN – Scope & Deliverables
//                     </h3>

//                     {/* Features */}
//                     <div className="mb-4">
//                         <h4 className="font-semibold mb-1">Included Features</h4>
//                         <ul className="list-disc list-inside text-gray-700">
//                             {plans[plan].features.map((f, i) => (
//                                 <li key={i}>{f}</li>
//                             ))}
//                         </ul>
//                     </div>

//                     {/* Modules */}
//                     <div className="mb-4">
//                         <h4 className="font-semibold mb-1">Modules Covered</h4>
//                         <ul className="list-disc list-inside text-gray-700">
//                             {plan === 'small' && (
//                                 <>
//                                     <li>User Authentication (Customer)</li>
//                                     <li>Product Catalog & Search</li>
//                                     <li>Cart, Checkout & Payments</li>
//                                     <li>Basic Order Management</li>
//                                 </>
//                             )}
//                             {plan === 'medium' && (
//                                 <>
//                                     <li>Customer + B2B Buyer Management</li>
//                                     <li>Prescription Upload & Verification</li>
//                                     <li>Admin Dashboard (Products, Orders, Users)</li>
//                                     <li>Notifications (Email / SMS / Push)</li>
//                                     <li>Inventory & Expiry Tracking</li>
//                                 </>
//                             )}
//                             {plan === 'high' && (
//                                 <>
//                                     <li>B2B, B2C & Doctor Portal</li>
//                                     <li>Credit Limit & Wallet System</li>
//                                     <li>Advanced Analytics & Sales Reports</li>
//                                     <li>Role-based Admin & Pharmacist Controls</li>
//                                     <li>Multi-language & AI Recommendations</li>
//                                 </>
//                             )}
//                         </ul>
//                     </div>

//                     {/* Timeline */}
//                     <div className="mb-4">
//                         <h4 className="font-semibold mb-1">Development Timeline</h4>
//                         <p className="text-gray-700">{plans[plan].timeline}</p>
//                         <ul className="list-disc list-inside text-gray-700 mt-1">
//                             <li>Requirement finalization & UI design</li>
//                             <li>Backend API development</li>
//                             <li>Frontend (Web & App) implementation</li>
//                             <li>Testing, bug fixes & deployment</li>
//                         </ul>
//                     </div>

//                     {/* Screens */}
//                     <div className="mb-4">
//                         <h4 className="font-semibold mb-1">Screen Count</h4>
//                         <p className="text-gray-700">
//                             Website Screens: <b>{plans[plan].screens.web}</b> <br />
//                             Mobile App Screens: <b>{plans[plan].screens.app}</b>
//                         </p>
//                     </div>

//                     {/* Cost */}
//                     <div className="mb-4">
//                         <h4 className="font-semibold mb-1">Commercials</h4>
//                         <p className="text-gray-700">
//                             <b>Development Cost:</b> {plans[plan].cost}<br />
//                             <b>Monthly Maintenance:</b> {plans[plan].maintenance}
//                         </p>
//                     </div>

//                     {/* Limitations */}
//                     <div className="mb-2">
//                         <h4 className="font-semibold mb-1">Limitations / Not Included</h4>
//                         <ul className="list-disc list-inside text-gray-700">
//                             {plan === 'small' && (
//                                 <>
//                                     <li>No B2B pricing or credit system</li>
//                                     <li>No Doctor / Hospital portal</li>
//                                     <li>No advanced analytics</li>
//                                 </>
//                             )}
//                             {plan === 'medium' && (
//                                 <>
//                                     <li>Basic reports only (no AI forecasting)</li>
//                                     <li>Single-region deployment</li>
//                                 </>
//                             )}
//                             {plan === 'high' && (
//                                 <>
//                                     <li>ERP integrations handled separately</li>
//                                     <li>Custom AI models require additional cost</li>
//                                 </>
//                             )}
//                         </ul>
//                     </div>

//                 </div>
//             </section>

//             NFR
//             <section className="mb-10">
//                 <h2 className="text-2xl font-semibold mb-2">9. Non-Functional Requirements</h2>

//                 <ul className="list-disc list-inside text-gray-700 space-y-1">
//                     <li>
//                         <b>Availability & Uptime:</b> System must maintain at least <b>99.5%</b> uptime monthly,
//                         excluding scheduled maintenance.
//                     </li>
//                     <li>
//                         <b>Performance:</b> Page load time should be under <b>3 seconds</b> on 4G networks
//                         for 95% of user requests.
//                     </li>
//                     <li>
//                         <b>Scalability:</b> Platform should support <b>10,000+ concurrent users</b> without
//                         degradation in performance.
//                     </li>
//                     <li>
//                         <b>Security:</b> All sensitive data must be encrypted using industry-standard algorithms
//                         (AES-256 at rest, HTTPS/TLS in transit).
//                     </li>
//                     <li>
//                         <b>Access Control:</b> Role-based access control (RBAC) must be enforced across all modules.
//                     </li>
//                     <li>
//                         <b>Auditability:</b> All admin and pharmacist actions should be logged for compliance
//                         and future audits.
//                     </li>
//                     <li>
//                         <b>Backup & Recovery:</b> Automated daily database backups with a maximum data loss
//                         window (RPO) of 24 hours.
//                     </li>
//                 </ul>
//             </section>



//             <section className="mb-10">
//                 <h2 className="text-2xl font-semibold mb-2">10. Risks & Assumptions</h2>

//                 <h4 className="font-semibold mt-2">Assumptions</h4>
//                 <ul className="list-disc list-inside text-gray-700">
//                     <li>All users upload valid and legally accepted prescriptions.</li>
//                     <li>B2B buyers provide correct GST and drug license information.</li>
//                     <li>Payment gateways and SMS providers maintain expected uptime.</li>
//                 </ul>

//                 <h4 className="font-semibold mt-4">Risks</h4>
//                 <ul className="list-disc list-inside text-gray-700">
//                     <li>
//                         <b>Regulatory Risk:</b> Changes in pharmaceutical laws may require system modifications.
//                     </li>
//                     <li>
//                         <b>Operational Risk:</b> Incorrect inventory or expiry data may lead to order failures.
//                     </li>
//                     <li>
//                         <b>Security Risk:</b> Unauthorized access or data breaches if best practices are not followed.
//                     </li>
//                     <li>
//                         <b>Mitigation:</b> Regular audits, validation rules, and security updates.
//                     </li>
//                 </ul>
//             </section>


//             <section className="mb-10">
//                 <h2 className="text-2xl font-semibold mb-2">11. Rollout & Deployment Plan</h2>

//                 <ol className="list-decimal list-inside text-gray-700 space-y-1">
//                     <li>
//                         <b>Staging & Internal QA:</b> Full feature testing in staging environment,
//                         including security, performance, and compliance checks.
//                     </li>
//                     <li>
//                         <b>Pilot Launch:</b> Limited rollout in a single city or selected B2B partners
//                         to validate real-world workflows.
//                     </li>
//                     <li>
//                         <b>Production Launch:</b> Gradual rollout to all users with monitoring and rollback strategy.
//                     </li>
//                     <li>
//                         <b>Post-Launch Monitoring:</b> Track KPIs, error rates, and customer feedback.
//                     </li>
//                     <li>
//                         <b>Marketing & Onboarding:</b> Training materials, demos, and onboarding support for users.
//                     </li>
//                 </ol>
//             </section>


//             <section className="mb-10">
//                 <h2 className="text-2xl font-semibold mb-2">12. Support & SLA</h2>

//                 <ul className="list-disc list-inside text-gray-700 space-y-1">
//                     <li>
//                         <b>Support Hours:</b> Standard support available from <b>9:00 AM to 6:00 PM</b>
//                         on business days.
//                     </li>
//                     <li>
//                         <b>Critical Issues (P1):</b> Resolution within <b>24 hours</b>.
//                     </li>
//                     <li>
//                         <b>High Priority Issues (P2):</b> Resolution within <b>48 hours</b>.
//                     </li>
//                     <li>
//                         <b>Medium Priority Issues (P3):</b> Resolution within <b>72 hours</b>.
//                     </li>
//                     <li>
//                         <b>Maintenance:</b> Monthly security patches, performance optimization,
//                         and dependency updates.
//                     </li>
//                     <li>
//                         <b>Monitoring:</b> 24×7 system monitoring and alerting for critical failures.
//                     </li>
//                 </ul>
//             </section>


//             <footer className="pt-6 border-t">
//                 <p className="text-sm text-gray-600">
//                     This document represents a real-world, scalable pharma commerce solution ready for
//                     production deployment.
//                 </p>
//             </footer>

//         </div>
//     );
// }




'use client'
import { useState } from 'react';

export default function Page() {
    const [plan, setPlan] = useState('small');

    const plans = {
        small: {
            features: [
                'Basic Product Catalog (listing & search)',
                'User Registration & Login',
                'Add to Cart & Checkout',
                'Order Tracking',
                'Basic Payment Gateway Integration'
            ],
            screens: { web: 5, app: 5 },
            timeline: '4–6 weeks',
            cost: '₹2,50,000',
            maintenance: '₹10,000 – ₹15,000 / month',
            modules: [
                'User Authentication (Customer)',
                'Product Catalog & Search',
                'Cart, Checkout & Payments',
                'Basic Order Management'
            ],
            limitations: [
                'No B2B pricing or credit system',
                'No Doctor / Hospital portal',
                'No advanced analytics'
            ]
        },
        medium: {
            features: [
                'All Small Plan Features',
                'Prescription Upload & Verification',
                'Admin Dashboard (Products, Orders, Users)',
                'Push / SMS / Email Notifications',
                'B2B & B2C Pricing'
            ],
            screens: { web: 8, app: 7 },
            timeline: '8–10 weeks',
            cost: '₹5,00,000',
            maintenance: '₹20,000 – ₹25,000 / month',
            modules: [
                'Customer + B2B Buyer Management',
                'Prescription Upload & Verification',
                'Admin Dashboard (Products, Orders, Users)',
                'Notifications (Email / SMS / Push)',
                'Inventory & Expiry Tracking'
            ],
            limitations: [
                'Basic reports only (no AI forecasting)',
                'Single-region deployment'
            ]
        },
        high: {
            features: [
                'All Medium Plan Features',
                'Doctor & Hospital Portal',
                'Credit Limit & Wallet System',
                'Advanced Analytics & Reports',
                'AI-based Recommendations',
                'Multi-language Support (Optional)'
            ],
            screens: { web: 12, app: 10 },
            timeline: '12–16 weeks',
            cost: '₹8,00,000',
            maintenance: '₹35,000 – ₹50,000 / month',
            modules: [
                'B2B, B2C & Doctor Portal',
                'Credit Limit & Wallet System',
                'Advanced Analytics & Sales Reports',
                'Role-based Admin & Pharmacist Controls',
                'Multi-language & AI Recommendations'
            ],
            limitations: [
                'ERP integrations handled separately',
                'Custom AI models require additional cost'
            ]
        }
    };

    const techStack = [
        ['Web Frontend', 'Next.js', 'SEO-friendly, fast, scalable web application'],
        ['Mobile App', 'React Native', 'Single codebase for Android & iOS'],
        ['Backend', 'Node.js + Express', 'Scalable REST APIs'],
        ['Database', 'MongoDB', 'Flexible & scalable data storage'],
        ['Authentication', 'JWT + OTP', 'Secure login & access control'],
        ['Payments', 'Razorpay / Stripe', 'Secure online payments'],
        ['Cloud', 'AWS / DigitalOcean', 'Hosting & scalability'],
        ['File Storage', 'AWS S3', 'Prescriptions & product images'],
        ['Notifications', 'Firebase / Twilio', 'Push, SMS & Email alerts'],
        ['Monitoring', 'Sentry / CloudWatch', 'Error & performance monitoring']
    ];

    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 font-sans text-gray-800 space-y-10">

            {/* Header */}
            <header className="text-center sm:text-left">
                <h1 className="text-3xl sm:text-4xl font-bold mb-2">
                    PharmaConnect – Product Requirement Document (PRD)
                </h1>
                <p className="text-gray-600 sm:text-lg">
                    B2B + B2C Pharma E-Commerce Platform | Version 1.0 | Owner: Rahul Sharma
                </p>
            </header>

            {/* Sections */}
            <div className="space-y-10">

                {/* 1. Product Overview */}
                <section className="bg-white shadow rounded-lg p-6">
                    <h2 className="text-2xl font-semibold mb-2">1. Product Overview</h2>
                    <p>
                        PharmaConnect is a full-stack pharma e-commerce platform designed for wholesalers
                        to sell medicines directly to medical stores, hospitals, doctors, and end customers.
                        The platform ensures regulatory compliance, prescription verification, inventory control,
                        and secure payments.
                    </p>
                </section>

                {/* 2. Target Users */}
                <section className="bg-white shadow rounded-lg p-6">
                    <h2 className="text-2xl font-semibold mb-2">2. Target Users</h2>
                    <ul className="list-disc list-inside space-y-1">
                        <li>Admin (Wholesaler Company)</li>
                        <li>B2B Buyers (Medical Stores, Hospitals, Clinics)</li>
                        <li>Doctors (Prescription-based ordering)</li>
                        <li>B2C Customers (End Users)</li>
                        <li>Delivery / Logistics Team (Future Phase)</li>
                    </ul>
                </section>

                {/* 3. Business Problem & Solution */}
                <section className="bg-white shadow rounded-lg p-6">
                    <h2 className="text-2xl font-semibold mb-2">3. Business Problem & Solution</h2>
                    <p>
                        Traditional pharma distribution relies heavily on manual ordering, phone calls,
                        and offline billing, leading to delays, errors, and poor visibility.
                    </p>
                    <p className="mt-2">
                        PharmaConnect digitizes the entire workflow — ordering, prescription validation,
                        invoicing, and delivery — resulting in faster operations, reduced errors,
                        and scalable growth.
                    </p>
                </section>

                {/* 4. Core Features */}
                <section className="bg-white shadow rounded-lg p-6">
                    <h2 className="text-2xl font-semibold mb-2">4. Core Features</h2>
                    <ul className="list-disc list-inside space-y-1">
                        <li>Role-based authentication (Admin, B2B, Doctor, Customer)</li>
                        <li>Medicine catalog with batch & expiry tracking</li>
                        <li>Prescription upload & pharmacist verification</li>
                        <li>Cart, checkout & GST invoice generation</li>
                        <li>B2B bulk ordering & repeat orders</li>
                        <li>Wallet / credit limit system for B2B</li>
                        <li>Admin dashboard with reports & analytics</li>
                    </ul>
                </section>

                {/* 5. User Workflows */}
                <section className="bg-white shadow rounded-lg p-6">
                    <h2 className="text-2xl font-semibold mb-2">5. Real-World User Workflows</h2>

                    <h4 className="font-semibold mt-4">B2C Customer Flow</h4>
                    <ol className="list-decimal list-inside space-y-1">
                        <li>Signup using phone number (OTP)</li>
                        <li>Browse medicines & upload prescription</li>
                        <li>Prescription verified by pharmacist</li>
                        <li>Payment & order confirmation</li>
                        <li>Delivery & invoice</li>
                    </ol>

                    <h4 className="font-semibold mt-4">B2B Buyer Flow</h4>
                    <ol className="list-decimal list-inside space-y-1">
                        <li>Admin approval with GST & license</li>
                        <li>Access B2B pricing & credit</li>
                        <li>Bulk or repeat orders</li>
                        <li>Invoice & payment settlement</li>
                    </ol>
                </section>

                {/* 6. Regulatory & Compliance */}
                <section className="bg-white shadow rounded-lg p-6">
                    <h2 className="text-2xl font-semibold mb-2">6. Regulatory & Compliance</h2>
                    <ul className="list-disc list-inside space-y-1">
                        <li>Drugs & Cosmetics Act compliance</li>
                        <li>Mandatory prescription for Schedule H/H1 drugs</li>
                        <li>Secure prescription storage (audit-ready)</li>
                        <li>GST-compliant invoicing</li>
                        <li>Admin & pharmacist action logs</li>
                    </ul>
                </section>

                {/* 7. Development Plans & Scope Details */}
                <section className="bg-white shadow rounded-lg p-6">
                    <h2 className="text-2xl font-semibold mb-4">7. Development Plans & Scope Details</h2>

                    {/* Plan Tabs */}
                    <div className="flex flex-wrap gap-3 mb-6">
                        {['small', 'medium', 'high'].map(p => (
                            <button
                                key={p}
                                onClick={() => setPlan(p)}
                                className={`px-4 py-2 rounded font-medium ${plan === p ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-700'
                                    }`}
                            >
                                {p.toUpperCase()}
                            </button>
                        ))}
                    </div>

                    {/* Plan Details */}
                    <div className="bg-gray-50 p-6 rounded border space-y-4">

                        <h3 className="text-xl font-semibold">{plan.toUpperCase()} PLAN – Scope & Deliverables</h3>

                        <div>
                            <h4 className="font-semibold mb-1">Included Features</h4>
                            <ul className="list-disc list-inside space-y-1">
                                {plans[plan].features.map((f, i) => <li key={i}>{f}</li>)}
                            </ul>
                        </div>

                        <div>
                            <h4 className="font-semibold mb-1">Modules Covered</h4>
                            <ul className="list-disc list-inside space-y-1">
                                {plans[plan].modules.map((m, i) => <li key={i}>{m}</li>)}
                            </ul>
                        </div>

                        <div>
                            <h4 className="font-semibold mb-1">Development Timeline & Screens</h4>
                            <p>Timeline: <b>{plans[plan].timeline}</b></p>
                            <p>Website Screens: <b>{plans[plan].screens.web}</b>, Mobile App Screens: <b>{plans[plan].screens.app}</b></p>
                        </div>

                        <div>
                            <h4 className="font-semibold mb-1">Commercials</h4>
                            <p>Development Cost: <b>{plans[plan].cost}</b></p>
                            <p>Monthly Maintenance: <b>{plans[plan].maintenance}</b></p>
                        </div>

                        <div>
                            <h4 className="font-semibold mb-1">Limitations / Not Included</h4>
                            <ul className="list-disc list-inside space-y-1">
                                {plans[plan].limitations.map((l, i) => <li key={i}>{l}</li>)}
                            </ul>
                        </div>

                    </div>
                </section>

                {/* 8. Technology Stack */}
                <section className="bg-white shadow rounded-lg p-6 overflow-x-auto">
                    <h2 className="text-2xl font-semibold mb-4">8. Technology Stack</h2>
                    <table className="min-w-full border-collapse border text-left text-gray-700">
                        <thead>
                            <tr className="bg-gray-100">
                                <th className="border px-3 py-2">Layer</th>
                                <th className="border px-3 py-2">Technology</th>
                                <th className="border px-3 py-2">Purpose</th>
                            </tr>
                        </thead>
                        <tbody>
                            {techStack.map((t, i) => (
                                <tr key={i} className={i % 2 === 0 ? 'bg-gray-50' : ''}>
                                    <td className="border px-3 py-2">{t[0]}</td>
                                    <td className="border px-3 py-2">{t[1]}</td>
                                    <td className="border px-3 py-2">{t[2]}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </section>

                {/* 9. Non-Functional Requirements */}
                <section className="bg-white shadow rounded-lg p-6">
                    <h2 className="text-2xl font-semibold mb-2">9. Non-Functional Requirements</h2>
                    <ul className="list-disc list-inside space-y-1">
                        <li><b>Availability & Uptime:</b> ≥ 99.5% monthly uptime, excluding maintenance.</li>
                        <li><b>Performance:</b> Page load under 3s on 4G for 95% requests.</li>
                        <li><b>Scalability:</b> Support 10,000+ concurrent users without degradation.</li>
                        <li><b>Security:</b> AES-256 at rest, HTTPS/TLS in transit.</li>
                        <li><b>Access Control:</b> RBAC enforced across all modules.</li>
                        <li><b>Auditability:</b> Admin & pharmacist actions logged.</li>
                        <li><b>Backup & Recovery:</b> Daily automated DB backups, RPO ≤ 24 hours.</li>
                    </ul>
                </section>

                {/* 10. Risks & Assumptions */}
                <section className="bg-white shadow rounded-lg p-6">
                    <h2 className="text-2xl font-semibold mb-2">10. Risks & Assumptions</h2>

                    <h4 className="font-semibold mt-2">Assumptions</h4>
                    <ul className="list-disc list-inside space-y-1">
                        <li>All users upload valid prescriptions.</li>
                        <li>B2B buyers provide correct GST & licenses.</li>
                        <li>Payment & SMS gateways maintain uptime.</li>
                    </ul>

                    <h4 className="font-semibold mt-4">Risks</h4>
                    <ul className="list-disc list-inside space-y-1">
                        <li><b>Regulatory Risk:</b> Pharma law changes may require system updates.</li>
                        <li><b>Operational Risk:</b> Incorrect inventory may cause order failures.</li>
                        <li><b>Security Risk:</b> Unauthorized access/data breaches.</li>
                        <li><b>Mitigation:</b> Regular audits, validation rules, security updates.</li>
                    </ul>
                </section>

                {/* 11. Rollout & Deployment */}
                <section className="bg-white shadow rounded-lg p-6">
                    <h2 className="text-2xl font-semibold mb-2">11. Rollout & Deployment Plan</h2>
                    <ol className="list-decimal list-inside space-y-1">
                        <li><b>Staging & Internal QA:</b> Full feature testing in staging environment.</li>
                        <li><b>Pilot Launch:</b> Limited rollout in a city or selected B2B partners.</li>
                        <li><b>Production Launch:</b> Gradual rollout to all users with monitoring & rollback.</li>
                        <li><b>Post-Launch Monitoring:</b> Track KPIs, errors, customer feedback.</li>
                        <li><b>Marketing & Onboarding:</b> Training, demos, onboarding support.</li>
                    </ol>
                </section>

                {/* 12. Support & SLA */}
                <section className="bg-white shadow rounded-lg p-6">
                    <h2 className="text-2xl font-semibold mb-2">12. Support & SLA</h2>
                    <ul className="list-disc list-inside space-y-1">
                        <li><b>Support Hours:</b> 9 AM – 6 PM business days.</li>
                        <li><b>Critical Issues (P1):</b> Resolved within 24 hours.</li>
                        <li><b>High Priority (P2):</b> Resolved within 48 hours.</li>
                        <li><b>Medium Priority (P3):</b> Resolved within 72 hours.</li>
                        <li><b>Maintenance:</b> Monthly patches, performance optimization, dependency updates.</li>
                        <li><b>Monitoring:</b> 24×7 system monitoring and alerts for critical failures.</li>
                    </ul>
                </section>

            </div>

            {/* Footer */}
            <footer className="mt-12 pt-6 border-t text-center text-gray-600">
                <p>This document represents a real-world, scalable pharma commerce solution ready for production deployment.</p>
            </footer>

        </div>
    );
}
