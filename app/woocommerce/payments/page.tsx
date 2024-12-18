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
  title: 'WooCommerce Payments - MitBridge Documentation',
  description:
    'Learn how to set up and manage payment methods in your WooCommerce store.'
}

export default function WooCommercePayments() {
  return (
    <div className="mx-auto max-w-4xl space-y-8">
      <div className="space-y-4">
        <h1 className="text-4xl font-bold">Payment Configuration</h1>
        <p className="text-lg text-muted-foreground">
          Set up and manage payment methods for your WooCommerce store.
        </p>
      </div>

      <Alert>
        <AlertTitle>Security First</AlertTitle>
        <AlertDescription>
          Always ensure your payment gateways are properly secured with SSL
          certificates and follow PCI compliance guidelines where necessary.
        </AlertDescription>
      </Alert>

      <div className="space-y-6">
        <Card>
          <CardHeader>
            <CardTitle>Available Payment Methods</CardTitle>
            <CardDescription>
              Overview of WooCommerce payment options.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <ul className="list-disc space-y-3 pl-4">
              <li>
                <strong>WooCommerce Payments:</strong> Built-in payment
                processing
              </li>
              <li>
                <strong>Stripe:</strong> Credit cards and digital wallets
              </li>
              <li>
                <strong>PayPal:</strong> Express checkout and standard payments
              </li>
              <li>
                <strong>Bank Transfer:</strong> Direct bank payments
              </li>
              <li>
                <strong>Cash on Delivery:</strong> Pay at delivery option
              </li>
            </ul>
          </CardContent>
        </Card>

        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="setup">
            <AccordionTrigger>Payment Gateway Setup</AccordionTrigger>
            <AccordionContent className="space-y-4">
              <ol className="list-decimal space-y-2 pl-4">
                <li>Go to WooCommerce → Settings → Payments</li>
                <li>Enable desired payment methods</li>
                <li>Configure each payment gateway</li>
                <li>Enter API keys and credentials</li>
                <li>Test payment processing</li>
                <li>Set payment method order</li>
              </ol>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="stripe">
            <AccordionTrigger>Stripe Configuration</AccordionTrigger>
            <AccordionContent className="space-y-4">
              <ul className="list-disc space-y-2 pl-4">
                <li>
                  <strong>API Keys:</strong> Connect Stripe account
                </li>
                <li>
                  <strong>Payment Methods:</strong> Enable card types
                </li>
                <li>
                  <strong>Apple/Google Pay:</strong> Digital wallet setup
                </li>
                <li>
                  <strong>Webhooks:</strong> Configure notifications
                </li>
                <li>
                  <strong>Test Mode:</strong> Sandbox environment
                </li>
              </ul>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="paypal">
            <AccordionTrigger>PayPal Integration</AccordionTrigger>
            <AccordionContent className="space-y-4">
              <ul className="list-disc space-y-2 pl-4">
                <li>
                  <strong>Account Setup:</strong> Link PayPal business account
                </li>
                <li>
                  <strong>Express Checkout:</strong> One-click payments
                </li>
                <li>
                  <strong>IPN Settings:</strong> Payment notifications
                </li>
                <li>
                  <strong>Currency:</strong> Payment currency options
                </li>
                <li>
                  <strong>Sandbox Testing:</strong> Test transactions
                </li>
              </ul>
            </AccordionContent>
          </AccordionItem>
        </Accordion>

        <Card>
          <CardHeader>
            <CardTitle>Security Settings</CardTitle>
            <CardDescription>Ensure secure payment processing.</CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="list-disc space-y-3 pl-4">
              <li>
                <strong>SSL Certificate:</strong> Secure checkout pages
              </li>
              <li>
                <strong>PCI Compliance:</strong> Payment security standards
              </li>
              <li>
                <strong>Fraud Prevention:</strong> Risk management tools
              </li>
              <li>
                <strong>Error Logging:</strong> Track payment issues
              </li>
              <li>
                <strong>Access Control:</strong> Payment settings permissions
              </li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Troubleshooting</CardTitle>
            <CardDescription>
              Common payment issues and solutions.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="list-disc space-y-3 pl-4">
              <li>
                <strong>Failed Payments:</strong> Transaction error handling
              </li>
              <li>
                <strong>Gateway Errors:</strong> Connection issues
              </li>
              <li>
                <strong>Currency Problems:</strong> Exchange rate settings
              </li>
              <li>
                <strong>Refund Issues:</strong> Processing returns
              </li>
              <li>
                <strong>API Connectivity:</strong> Gateway integration
              </li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Next Steps</CardTitle>
            <CardDescription>Complete your store setup.</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <Button
                asChild
                variant="secondary"
                className="w-full justify-between"
              >
                <Link href="/woocommerce/troubleshooting">
                  Troubleshooting Guide
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button
                asChild
                variant="secondary"
                className="w-full justify-between"
              >
                <Link href="/wordpress/content">
                  Content Management
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
