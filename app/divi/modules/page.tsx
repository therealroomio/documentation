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
  title: 'Divi Modules & Elements - MitBridge Documentation',
  description:
    'Learn about the various modules and elements available in Divi Builder.'
}

export default function DiviModules() {
  return (
    <div className="mx-auto max-w-4xl space-y-8">
      <div className="space-y-4">
        <h1 className="text-4xl font-bold">Divi Modules & Elements</h1>
        <p className="text-lg text-muted-foreground">
          Explore Divi&apos;s extensive collection of modules and elements to
          create engaging content.
        </p>
      </div>

      <Alert>
        <AlertTitle>Module Updates</AlertTitle>
        <AlertDescription>
          Divi regularly updates its module library. Make sure your theme is up
          to date to access the latest features and improvements.
        </AlertDescription>
      </Alert>

      <div className="space-y-6">
        <Card>
          <CardHeader>
            <CardTitle>Essential Modules</CardTitle>
            <CardDescription>
              Core modules you&apos;ll use frequently in your layouts.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <Accordion type="single" collapsible>
              <AccordionItem value="text">
                <AccordionTrigger>Text Modules</AccordionTrigger>
                <AccordionContent className="space-y-4">
                  <ul className="list-disc space-y-2 pl-4">
                    <li>
                      <strong>Text:</strong> Standard text content with rich
                      formatting options
                    </li>
                    <li>
                      <strong>Heading:</strong> Section titles with customizable
                      styles
                    </li>
                    <li>
                      <strong>Blurb:</strong> Combination of image, title, and
                      text
                    </li>
                  </ul>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="media">
                <AccordionTrigger>Media Modules</AccordionTrigger>
                <AccordionContent className="space-y-4">
                  <ul className="list-disc space-y-2 pl-4">
                    <li>
                      <strong>Image:</strong> Single image with lightbox and
                      hover effects
                    </li>
                    <li>
                      <strong>Gallery:</strong> Grid or slider of multiple
                      images
                    </li>
                    <li>
                      <strong>Video:</strong> Embed videos from various sources
                    </li>
                  </ul>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="navigation">
                <AccordionTrigger>Navigation & Buttons</AccordionTrigger>
                <AccordionContent className="space-y-4">
                  <ul className="list-disc space-y-2 pl-4">
                    <li>
                      <strong>Button:</strong> Call-to-action buttons with
                      custom styles
                    </li>
                    <li>
                      <strong>Menu:</strong> Custom navigation menus
                    </li>
                    <li>
                      <strong>Social Follow:</strong> Social media links and
                      icons
                    </li>
                  </ul>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Specialty Modules</CardTitle>
            <CardDescription>
              Advanced modules for specific functionality.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <Accordion type="single" collapsible>
              <AccordionItem value="forms">
                <AccordionTrigger>Forms & Contact</AccordionTrigger>
                <AccordionContent className="space-y-4">
                  <ul className="list-disc space-y-2 pl-4">
                    <li>
                      <strong>Contact Form:</strong> Custom forms with email
                      integration
                    </li>
                    <li>
                      <strong>Email Optin:</strong> Newsletter subscription
                      forms
                    </li>
                    <li>
                      <strong>Search:</strong> Search functionality for your
                      site
                    </li>
                  </ul>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="dynamic">
                <AccordionTrigger>Dynamic Content</AccordionTrigger>
                <AccordionContent className="space-y-4">
                  <ul className="list-disc space-y-2 pl-4">
                    <li>
                      <strong>Blog:</strong> Display posts in various layouts
                    </li>
                    <li>
                      <strong>Portfolio:</strong> Showcase projects and work
                    </li>
                    <li>
                      <strong>Shop:</strong> WooCommerce product displays
                    </li>
                  </ul>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="advanced">
                <AccordionTrigger>Advanced Elements</AccordionTrigger>
                <AccordionContent className="space-y-4">
                  <ul className="list-disc space-y-2 pl-4">
                    <li>
                      <strong>Code:</strong> Custom HTML/CSS/JavaScript
                    </li>
                    <li>
                      <strong>Map:</strong> Interactive Google Maps
                    </li>
                    <li>
                      <strong>Countdown Timer:</strong> Event countdowns
                    </li>
                  </ul>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Module Settings</CardTitle>
            <CardDescription>
              Common settings available across most modules.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="list-disc space-y-3 pl-4">
              <li>
                <strong>Design:</strong> Customize colors, fonts, and spacing
              </li>
              <li>
                <strong>Advanced:</strong> CSS classes, IDs, and custom code
              </li>
              <li>
                <strong>Position:</strong> Control module alignment and stacking
              </li>
              <li>
                <strong>Animation:</strong> Add entrance and hover effects
              </li>
              <li>
                <strong>Visibility:</strong> Show/hide on different devices
              </li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Next Steps</CardTitle>
            <CardDescription>
              Learn more about customizing your Divi site.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <Button
                asChild
                variant="secondary"
                className="w-full justify-between"
              >
                <Link href="/divi/theme-options">
                  Configure theme options
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button
                asChild
                variant="secondary"
                className="w-full justify-between"
              >
                <Link href="/wordpress/content">
                  Manage WordPress content
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
