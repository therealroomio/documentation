import { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert'
import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle
} from '@/components/ui/card'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger
} from '@/components/ui/accordion'

export const metadata: Metadata = {
  title: 'WooCommerce Setup - MitBridge Documentation',
  description:
    'Learn how to set up and configure WooCommerce for your online store.'
}

export default function WooCommerceSetup() {
  return (
    <div className="mx-auto max-w-4xl space-y-8">
      <div className="space-y-4">
        <h1 className="text-4xl font-bold">WooCommerce Setup</h1>
        <p className="text-lg text-muted-foreground">
          Configure your WooCommerce store settings to start selling online.
        </p>
      </div>

      <Alert>
        <AlertTitle>Before You Begin</AlertTitle>
        <AlertDescription>
          Ensure you have administrator access and have installed the latest
          version of WooCommerce. Back up your site before making major changes.
        </AlertDescription>
      </Alert>

      <div className="space-y-6">
        <Card>
          <CardHeader>
            <CardTitle>Initial Setup Steps</CardTitle>
            <CardDescription>
              Essential configuration for your WooCommerce store.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <ol className="list-decimal space-y-3 pl-4">
              <li>Install and activate WooCommerce plugin</li>
              <li>Run the setup wizard for basic configuration</li>
              <li>Configure store location and currency</li>
              <li>Set up payment and shipping methods</li>
              <li>Configure tax settings if applicable</li>
            </ol>
          </CardContent>
        </Card>

        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="general">
            <AccordionTrigger>General Settings</AccordionTrigger>
            <AccordionContent className="space-y-4">
              <ul className="list-disc space-y-2 pl-4">
                <li>
                  <strong>Store Address:</strong> Set primary location
                </li>
                <li>
                  <strong>Selling Location:</strong> Define shipping countries
                </li>
                <li>
                  <strong>Currency Options:</strong> Set default currency and
                  format
                </li>
                <li>
                  <strong>Units:</strong> Configure weight and dimension units
                </li>
                <li>
                  <strong>Customer Accounts:</strong> Set account preferences
                </li>
              </ul>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="products">
            <AccordionTrigger>Product Settings</AccordionTrigger>
            <AccordionContent className="space-y-4">
              <ul className="list-disc space-y-2 pl-4">
                <li>
                  <strong>Catalog Display:</strong> Configure shop layout
                </li>
                <li>
                  <strong>Inventory:</strong> Enable stock management
                </li>
                <li>
                  <strong>Downloadable Products:</strong> Set file access rules
                </li>
                <li>
                  <strong>Product Reviews:</strong> Configure review settings
                </li>
                <li>
                  <strong>Product Images:</strong> Set image dimensions
                </li>
              </ul>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="checkout">
            <AccordionTrigger>Checkout Settings</AccordionTrigger>
            <AccordionContent className="space-y-4">
              <ul className="list-disc space-y-2 pl-4">
                <li>
                  <strong>Cart Behavior:</strong> Configure cart page settings
                </li>
                <li>
                  <strong>Checkout Process:</strong> Customize checkout fields
                </li>
                <li>
                  <strong>Guest Checkout:</strong> Enable/disable guest
                  purchases
                </li>
                <li>
                  <strong>Terms & Conditions:</strong> Set up legal requirements
                </li>
                <li>
                  <strong>Order Status:</strong> Configure order workflows
                </li>
              </ul>
            </AccordionContent>
          </AccordionItem>
        </Accordion>

        <Card>
          <CardHeader>
            <CardTitle>Payment Configuration</CardTitle>
            <CardDescription>
              Set up payment methods for your store.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="list-disc space-y-3 pl-4">
              <li>
                <strong>Payment Gateways:</strong> Enable payment methods
              </li>
              <li>
                <strong>Stripe/PayPal:</strong> Configure payment processors
              </li>
              <li>
                <strong>Direct Bank Transfer:</strong> Set up bank details
              </li>
              <li>
                <strong>Cash on Delivery:</strong> Configure COD settings
              </li>
              <li>
                <strong>Security:</strong> Enable SSL and secure checkout
              </li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Shipping Setup</CardTitle>
            <CardDescription>
              Configure shipping options and zones.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="list-disc space-y-3 pl-4">
              <li>
                <strong>Shipping Zones:</strong> Define delivery areas
              </li>
              <li>
                <strong>Shipping Methods:</strong> Set up delivery options
              </li>
              <li>
                <strong>Shipping Classes:</strong> Group products by shipping
                needs
              </li>
              <li>
                <strong>Calculations:</strong> Configure shipping rates
              </li>
              <li>
                <strong>Free Shipping:</strong> Set up conditions
              </li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Next Steps</CardTitle>
            <CardDescription>
              Continue setting up your WooCommerce store.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <Button
                asChild
                variant="secondary"
                className="w-full justify-between"
              >
                <Link href="/woocommerce/products">
                  Product Management
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button
                asChild
                variant="secondary"
                className="w-full justify-between"
              >
                <Link href="/woocommerce/payments">
                  Payment Configuration
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
