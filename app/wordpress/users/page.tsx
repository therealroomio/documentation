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
  title: 'WordPress User Management - MitBridge Documentation',
  description:
    'Learn how to manage user accounts, roles, and permissions in WordPress.'
}

export default function WordPressUsers() {
  return (
    <div className="mx-auto max-w-4xl space-y-8">
      <div className="space-y-4">
        <h1 className="text-4xl font-bold">User Management</h1>
        <p className="text-lg text-muted-foreground">
          Learn how to manage user accounts, assign roles, and control access
          permissions in WordPress.
        </p>
      </div>

      <Alert>
        <AlertTitle>Security First</AlertTitle>
        <AlertDescription>
          Always follow security best practices when managing user accounts. Use
          strong passwords, limit admin access, and regularly review user
          permissions.
        </AlertDescription>
      </Alert>

      <div className="space-y-6">
        <Card>
          <CardHeader>
            <CardTitle>User Roles Overview</CardTitle>
            <CardDescription>
              Understanding WordPress user roles and capabilities.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <ul className="list-disc space-y-3 pl-4">
              <li>
                <strong>Administrator:</strong> Full site management access
              </li>
              <li>
                <strong>Editor:</strong> Content management without site
                settings
              </li>
              <li>
                <strong>Author:</strong> Can publish and manage their own posts
              </li>
              <li>
                <strong>Contributor:</strong> Can write posts but not publish
              </li>
              <li>
                <strong>Subscriber:</strong> Can only manage their profile
              </li>
            </ul>
          </CardContent>
        </Card>

        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="adding-users">
            <AccordionTrigger>Adding New Users</AccordionTrigger>
            <AccordionContent className="space-y-4">
              <ol className="list-decimal space-y-2 pl-4">
                <li>Go to Users → Add New in the dashboard</li>
                <li>Enter username and email address</li>
                <li>Set or generate a strong password</li>
                <li>Select appropriate user role</li>
                <li>Configure additional user details</li>
                <li>Send user notification if desired</li>
              </ol>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="managing-users">
            <AccordionTrigger>Managing Existing Users</AccordionTrigger>
            <AccordionContent className="space-y-4">
              <ul className="list-disc space-y-2 pl-4">
                <li>
                  <strong>Edit Profile:</strong> Update user information
                </li>
                <li>
                  <strong>Change Role:</strong> Modify user permissions
                </li>
                <li>
                  <strong>Reset Password:</strong> Help users regain access
                </li>
                <li>
                  <strong>Delete User:</strong> Remove account and manage
                  content
                </li>
                <li>
                  <strong>Bulk Actions:</strong> Modify multiple users at once
                </li>
              </ul>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="security">
            <AccordionTrigger>Security Measures</AccordionTrigger>
            <AccordionContent className="space-y-4">
              <ul className="list-disc space-y-2 pl-4">
                <li>
                  <strong>Password Policies:</strong> Enforce strong passwords
                </li>
                <li>
                  <strong>Two-Factor Auth:</strong> Enable additional security
                </li>
                <li>
                  <strong>Login Attempts:</strong> Limit failed login tries
                </li>
                <li>
                  <strong>Session Management:</strong> Control user sessions
                </li>
                <li>
                  <strong>Activity Logging:</strong> Track user actions
                </li>
              </ul>
            </AccordionContent>
          </AccordionItem>
        </Accordion>

        <Card>
          <CardHeader>
            <CardTitle>User Profile Fields</CardTitle>
            <CardDescription>
              Understanding and customizing user information.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="list-disc space-y-3 pl-4">
              <li>
                <strong>Required Fields:</strong> Username, email, password
              </li>
              <li>
                <strong>Optional Fields:</strong> First name, last name, website
              </li>
              <li>
                <strong>Biographical Info:</strong> User description
              </li>
              <li>
                <strong>Profile Picture:</strong> User avatar settings
              </li>
              <li>
                <strong>Custom Fields:</strong> Add additional user data
              </li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Troubleshooting</CardTitle>
            <CardDescription>
              Common user management issues and solutions.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="list-disc space-y-3 pl-4">
              <li>
                <strong>Lost Admin Access:</strong> Recovery procedures
              </li>
              <li>
                <strong>Password Reset Issues:</strong> Email configuration
              </li>
              <li>
                <strong>Role Conflicts:</strong> Permission problems
              </li>
              <li>
                <strong>User Sync:</strong> Multi-site management
              </li>
              <li>
                <strong>Import/Export:</strong> Transferring user data
              </li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Next Steps</CardTitle>
            <CardDescription>
              Continue exploring WordPress features.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <Button
                asChild
                variant="secondary"
                className="w-full justify-between"
              >
                <Link href="/wordpress/media">
                  Media Library Management
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button
                asChild
                variant="secondary"
                className="w-full justify-between"
              >
                <Link href="/woocommerce/setup">
                  WooCommerce Setup
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
