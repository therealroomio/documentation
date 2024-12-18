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
  title: 'WooCommerce Troubleshooting - MitBridge Documentation',
  description: 'Learn how to diagnose and fix common WooCommerce issues.'
}

export default function WooCommerceTroubleshooting() {
  return (
    <div className="mx-auto max-w-4xl space-y-8">
      <div className="space-y-4">
        <h1 className="text-4xl font-bold">Troubleshooting Guide</h1>
        <p className="text-lg text-muted-foreground">
          Solutions for common WooCommerce issues and how to resolve them.
        </p>
      </div>

      <Alert>
        <AlertTitle>Before Troubleshooting</AlertTitle>
        <AlertDescription>
          Always back up your database and files before making any changes. Use
          a staging environment for testing solutions when possible.
        </AlertDescription>
      </Alert>

      <div className="space-y-6">
        <Card>
          <CardHeader>
            <CardTitle>Common Issues Overview</CardTitle>
            <CardDescription>
              Frequently encountered WooCommerce problems.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <ul className="list-disc space-y-3 pl-4">
              <li>
                <strong>Payment Gateway Errors:</strong> Failed transactions and
                connectivity issues
              </li>
              <li>
                <strong>Product Display Problems:</strong> Images not showing or
                layout issues
              </li>
              <li>
                <strong>Checkout Errors:</strong> Cart and checkout process
                failures
              </li>
              <li>
                <strong>Performance Issues:</strong> Slow loading times and
                timeouts
              </li>
              <li>
                <strong>Plugin Conflicts:</strong> Compatibility problems with
                other plugins
              </li>
            </ul>
          </CardContent>
        </Card>

        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="payment">
            <AccordionTrigger>Payment Issues</AccordionTrigger>
            <AccordionContent className="space-y-4">
              <ul className="list-disc space-y-2 pl-4">
                <li>
                  <strong>Gateway Connection:</strong> Check API credentials and
                  SSL
                </li>
                <li>
                  <strong>Failed Transactions:</strong> Review error logs and
                  gateway settings
                </li>
                <li>
                  <strong>Currency Issues:</strong> Verify currency
                  configuration
                </li>
                <li>
                  <strong>Checkout Errors:</strong> Validate form fields and
                  requirements
                </li>
                <li>
                  <strong>Payment Methods:</strong> Test each enabled payment
                  option
                </li>
              </ul>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="products">
            <AccordionTrigger>Product Display Issues</AccordionTrigger>
            <AccordionContent className="space-y-4">
              <ul className="list-disc space-y-2 pl-4">
                <li>
                  <strong>Missing Images:</strong> Check media library and
                  permissions
                </li>
                <li>
                  <strong>Category Problems:</strong> Review taxonomy settings
                </li>
                <li>
                  <strong>Pricing Display:</strong> Verify tax and currency
                  settings
                </li>
                <li>
                  <strong>Variable Products:</strong> Check attribute
                  configuration
                </li>
                <li>
                  <strong>Search Issues:</strong> Rebuild product index
                </li>
              </ul>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="performance">
            <AccordionTrigger>Performance Optimization</AccordionTrigger>
            <AccordionContent className="space-y-4">
              <ul className="list-disc space-y-2 pl-4">
                <li>
                  <strong>Caching:</strong> Configure WooCommerce and server
                  caching
                </li>
                <li>
                  <strong>Database Cleanup:</strong> Optimize tables and remove
                  old data
                </li>
                <li>
                  <strong>Image Optimization:</strong> Compress product images
                </li>
                <li>
                  <strong>Plugin Impact:</strong> Review and optimize active
                  plugins
                </li>
                <li>
                  <strong>Server Resources:</strong> Check hosting requirements
                </li>
              </ul>
            </AccordionContent>
          </AccordionItem>
        </Accordion>

        <Card>
          <CardHeader>
            <CardTitle>Diagnostic Tools</CardTitle>
            <CardDescription>
              Tools for identifying and fixing issues.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="list-disc space-y-3 pl-4">
              <li>
                <strong>Status Report:</strong> System status and configuration
              </li>
              <li>
                <strong>Error Logs:</strong> WordPress and WooCommerce logs
              </li>
              <li>
                <strong>Testing Tools:</strong> Payment gateway testing
              </li>
              <li>
                <strong>Debug Mode:</strong> Enable WordPress debugging
              </li>
              <li>
                <strong>Health Check:</strong> WordPress site health tool
              </li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Maintenance Tips</CardTitle>
            <CardDescription>
              Preventive measures to avoid common issues.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="list-disc space-y-3 pl-4">
              <li>
                <strong>Regular Updates:</strong> Keep plugins and themes
                current
              </li>
              <li>
                <strong>Backups:</strong> Maintain regular backup schedule
              </li>
              <li>
                <strong>Monitoring:</strong> Track site performance and errors
              </li>
              <li>
                <strong>Security:</strong> Regular security audits and updates
              </li>
              <li>
                <strong>Documentation:</strong> Keep configuration records
              </li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Getting Help</CardTitle>
            <CardDescription>Resources for additional support.</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <ul className="list-disc space-y-3 pl-4">
                <li>
                  <strong>WooCommerce Docs:</strong> Official documentation and
                  guides
                </li>
                <li>
                  <strong>Support Forums:</strong> Community help and solutions
                </li>
                <li>
                  <strong>Premium Support:</strong> Direct WooCommerce
                  assistance
                </li>
                <li>
                  <strong>Developer Resources:</strong> Technical documentation
                </li>
                <li>
                  <strong>Professional Help:</strong> Finding qualified
                  developers
                </li>
              </ul>
              <div className="mt-6">
                <Button
                  asChild
                  variant="secondary"
                  className="w-full justify-between"
                >
                  <Link
                    href="https://woocommerce.com/document/woocommerce-101-video-series/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Visit WooCommerce Documentation
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
