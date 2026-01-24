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
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 font-sans text-gray-800 space-y-10 bg-white">

            {/* Header */}
            <header className="text-center sm:text-left">
                <h1 className="text-3xl sm:text-4xl font-bold mb-2 text-gray-900">
                    PharmaConnect – Product Requirement Document (PRD)
                </h1>
                <p className="text-gray-700 sm:text-lg">
                    B2B + B2C Pharma E-Commerce Platform | Version 1.0 | Owner: Aditya
                </p>
            </header>

            {/* Sections */}
            <div className="space-y-10">

                {/* 1. Product Overview */}
                <section className="bg-white shadow rounded-lg p-6">
                    <h2 className="text-2xl font-semibold mb-2 text-gray-900">1. Product Overview</h2>
                    <p className="text-gray-800">
                        PharmaConnect is a full-stack pharma e-commerce platform designed for wholesalers
                        to sell medicines directly to medical stores, hospitals, doctors, and end customers.
                        The platform ensures regulatory compliance, prescription verification, inventory control,
                        and secure payments.
                    </p>
                </section>

                {/* 2. Target Users */}
                <section className="bg-white shadow rounded-lg p-6">
                    <h2 className="text-2xl font-semibold mb-2 text-gray-900">2. Target Users</h2>
                    <ul className="list-disc list-inside space-y-1 text-gray-800">
                        <li>Admin (Wholesaler Company)</li>
                        <li>B2B Buyers (Medical Stores, Hospitals, Clinics)</li>
                        <li>Doctors (Prescription-based ordering)</li>
                        <li>B2C Customers (End Users)</li>
                        <li>Delivery / Logistics Team (Future Phase)</li>
                    </ul>
                </section>

                {/* 3. Business Problem & Solution */}
                <section className="bg-white shadow rounded-lg p-6">
                    <h2 className="text-2xl font-semibold mb-2 text-gray-900">3. Business Problem & Solution</h2>
                    <p className="text-gray-800">
                        Traditional pharma distribution relies heavily on manual ordering, phone calls,
                        and offline billing, leading to delays, errors, and poor visibility.
                    </p>
                    <p className="mt-2 text-gray-800">
                        PharmaConnect digitizes the entire workflow — ordering, prescription validation,
                        invoicing, and delivery — resulting in faster operations, reduced errors,
                        and scalable growth.
                    </p>
                </section>

                {/* 4. Core Features */}
                <section className="bg-white shadow rounded-lg p-6">
                    <h2 className="text-2xl font-semibold mb-2 text-gray-900">4. Core Features</h2>
                    <ul className="list-disc list-inside space-y-1 text-gray-800">
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
                    <h2 className="text-2xl font-semibold mb-2 text-gray-900">5. Real-World User Workflows</h2>

                    <h4 className="font-semibold mt-4 text-gray-900">B2C Customer Flow</h4>
                    <ol className="list-decimal list-inside space-y-1 text-gray-800">
                        <li>Signup using phone number (OTP)</li>
                        <li>Browse medicines & upload prescription</li>
                        <li>Prescription verified by pharmacist</li>
                        <li>Payment & order confirmation</li>
                        <li>Delivery & invoice</li>
                    </ol>

                    <h4 className="font-semibold mt-4 text-gray-900">B2B Buyer Flow</h4>
                    <ol className="list-decimal list-inside space-y-1 text-gray-800">
                        <li>Admin approval with GST & license</li>
                        <li>Access B2B pricing & credit</li>
                        <li>Bulk or repeat orders</li>
                        <li>Invoice & payment settlement</li>
                    </ol>
                </section>

                {/* 6. Regulatory & Compliance */}
                <section className="bg-white shadow rounded-lg p-6">
                    <h2 className="text-2xl font-semibold mb-2 text-gray-900">6. Regulatory & Compliance</h2>
                    <ul className="list-disc list-inside space-y-1 text-gray-800">
                        <li>Drugs & Cosmetics Act compliance</li>
                        <li>Mandatory prescription for Schedule H/H1 drugs</li>
                        <li>Secure prescription storage (audit-ready)</li>
                        <li>GST-compliant invoicing</li>
                        <li>Admin & pharmacist action logs</li>
                    </ul>
                </section>

                {/* 7. Development Plans & Scope Details */}
                <section className="bg-white shadow rounded-lg p-6">
                    <h2 className="text-2xl font-semibold mb-4 text-gray-900">7. Development Plans & Scope Details</h2>

                    {/* Plan Tabs */}
                    <div className="flex flex-wrap gap-3 mb-6">
                        {['small', 'medium', 'high'].map(p => (
                            <button
                                key={p}
                                onClick={() => setPlan(p)}
                                className={`px-4 py-2 rounded font-medium ${plan === p ? 'bg-blue-600 text-white' : 'bg-gray-300 text-gray-800'
                                    }`}
                            >
                                {p.toUpperCase()}
                            </button>
                        ))}
                    </div>

                    {/* Plan Details */}
                    <div className="bg-gray-100 p-6 rounded border space-y-4">

                        <h3 className="text-xl font-semibold text-gray-900">{plan.toUpperCase()} PLAN – Scope & Deliverables</h3>

                        <div>
                            <h4 className="font-semibold mb-1 text-gray-900">Included Features</h4>
                            <ul className="list-disc list-inside space-y-1 text-gray-800">
                                {plans[plan].features.map((f, i) => <li key={i}>{f}</li>)}
                            </ul>
                        </div>

                        <div>
                            <h4 className="font-semibold mb-1 text-gray-900">Modules Covered</h4>
                            <ul className="list-disc list-inside space-y-1 text-gray-800">
                                {plans[plan].modules.map((m, i) => <li key={i}>{m}</li>)}
                            </ul>
                        </div>

                        <div>
                            <h4 className="font-semibold mb-1 text-gray-900">Development Timeline & Screens</h4>
                            <p className="text-gray-800">Timeline: <b>{plans[plan].timeline}</b></p>
                            <p className="text-gray-800">Website Screens: <b>{plans[plan].screens.web}</b>, Mobile App Screens: <b>{plans[plan].screens.app}</b></p>
                        </div>

                        <div>
                            <h4 className="font-semibold mb-1 text-gray-900">Commercials</h4>
                            <p className="text-gray-800">Development Cost: <b>{plans[plan].cost}</b></p>
                            <p className="text-gray-800">Monthly Maintenance: <b>{plans[plan].maintenance}</b></p>
                        </div>

                        <div>
                            <h4 className="font-semibold mb-1 text-gray-900">Limitations / Not Included</h4>
                            <ul className="list-disc list-inside space-y-1 text-gray-800">
                                {plans[plan].limitations.map((l, i) => <li key={i}>{l}</li>)}
                            </ul>
                        </div>

                    </div>
                </section>

                {/* 8. Technology Stack */}
                <section className="bg-white shadow rounded-lg p-6 overflow-x-auto">
                    <h2 className="text-2xl font-semibold mb-4 text-gray-900">8. Technology Stack</h2>
                    <table className="min-w-full border-collapse border text-left text-gray-800">
                        <thead>
                            <tr className="bg-gray-200">
                                <th className="border px-3 py-2">Layer</th>
                                <th className="border px-3 py-2">Technology</th>
                                <th className="border px-3 py-2">Purpose</th>
                            </tr>
                        </thead>
                        <tbody>
                            {techStack.map((t, i) => (
                                <tr key={i} className={i % 2 === 0 ? 'bg-gray-100' : ''}>
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
                    <h2 className="text-2xl font-semibold mb-2 text-gray-900">9. Non-Functional Requirements</h2>
                    <ul className="list-disc list-inside space-y-1 text-gray-800">
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
                    <h2 className="text-2xl font-semibold mb-2 text-gray-900">10. Risks & Assumptions</h2>

                    <h4 className="font-semibold mt-2 text-gray-900">Assumptions</h4>
                    <ul className="list-disc list-inside space-y-1 text-gray-800">
                        <li>All users upload valid prescriptions.</li>
                        <li>B2B buyers provide correct GST & licenses.</li>
                        <li>Payment & SMS gateways maintain uptime.</li>
                    </ul>

                    <h4 className="font-semibold mt-4 text-gray-900">Risks</h4>
                    <ul className="list-disc list-inside space-y-1 text-gray-800">
                        <li><b>Regulatory Risk:</b> Pharma law changes may require system updates.</li>
                        <li><b>Operational Risk:</b> Incorrect inventory may cause order failures.</li>
                        <li><b>Security Risk:</b> Unauthorized access/data breaches.</li>
                        <li><b>Mitigation:</b> Regular audits, validation rules, security updates.</li>
                    </ul>
                </section>

                {/* 11. Rollout & Deployment */}
                <section className="bg-white shadow rounded-lg p-6">
                    <h2 className="text-2xl font-semibold mb-2 text-gray-900">11. Rollout & Deployment Plan</h2>
                    <ol className="list-decimal list-inside space-y-1 text-gray-800">
                        <li><b>Staging & Internal QA:</b> Full feature testing in staging environment.</li>
                        <li><b>Pilot Launch:</b> Limited rollout in a city or selected B2B partners.</li>
                        <li><b>Production Launch:</b> Gradual rollout to all users with monitoring & rollback.</li>
                        <li><b>Post-Launch Monitoring:</b> Track KPIs, errors, customer feedback.</li>
                        <li><b>Marketing & Onboarding:</b> Training, demos, onboarding support.</li>
                    </ol>
                </section>

                {/* 12. Support & SLA */}
                <section className="bg-white shadow rounded-lg p-6">
                    <h2 className="text-2xl font-semibold mb-2 text-gray-900">12. Support & SLA</h2>
                    <ul className="list-disc list-inside space-y-1 text-gray-800">
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
            <footer className="mt-12 pt-6 border-t text-center text-gray-700">
                <p>This document represents a real-world, scalable pharma commerce solution ready for production deployment.</p>
            </footer>

        </div>
    );
}
